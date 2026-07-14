import type { NextApiRequest, NextApiResponse } from "next";

type ContactResponse = {
  message: string;
};

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  reason?: unknown;
  subject?: unknown;
  message?: unknown;
  contactCheck?: unknown;
  turnstileToken?: unknown;
};

type TurnstileVerification = {
  success: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

const allowedReasons = new Set([
  "Professional opportunity",
  "Freelance project",
  "Technical collaboration",
  "General inquiry",
]);

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function getText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getClientAddress(request: NextApiRequest) {
  const forwarded = request.headers["x-forwarded-for"];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return value?.split(",")[0]?.trim() || request.socket.remoteAddress || "unknown";
}

function isRateLimited(address: string) {
  const now = Date.now();
  const entry = rateLimit.get(address);

  if (!entry || entry.resetAt <= now) {
    rateLimit.set(address, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

async function validateTurnstile(
  token: string,
  remoteAddress: string,
  secret: string,
) {
  const verificationResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        response: token,
        remoteip: remoteAddress,
      }),
      signal: AbortSignal.timeout(8_000),
    },
  );

  if (!verificationResponse.ok) {
    throw new Error(`Turnstile verification returned ${verificationResponse.status}.`);
  }

  return (await verificationResponse.json()) as TurnstileVerification;
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "16kb",
    },
  },
  maxDuration: 20,
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ContactResponse>,
) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ message: "Method not allowed." });
    return;
  }

  response.setHeader("Cache-Control", "no-store");

  const body = (request.body ?? {}) as ContactRequestBody;
  const contactCheck = getText(body.contactCheck);

  // Silently accept honeypot submissions so bots receive no useful signal.
  if (contactCheck) {
    response.status(200).json({ message: "Message sent successfully." });
    return;
  }

  const name = getText(body.name);
  const email = getText(body.email).toLowerCase();
  const requestedReason = getText(body.reason);
  const reason = allowedReasons.has(requestedReason) ? requestedReason : "General inquiry";
  const subject = getText(body.subject) || `${reason} from ${name}`;
  const message = getText(body.message);
  const turnstileToken = getText(body.turnstileToken);

  if (
    name.length < 2 ||
    name.length > 80 ||
    !isValidEmail(email) ||
    email.length > 120 ||
    subject.length > 140 ||
    message.length < 10 ||
    message.length > 2000
  ) {
    response.status(400).json({
      message: "Please check your details and provide a message of at least 10 characters.",
    });
    return;
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

  if (!turnstileSecret) {
    response.status(503).json({
      message: "Security verification is not configured. Please use the direct email link below.",
    });
    return;
  }

  if (!turnstileToken || turnstileToken.length > 2048) {
    response.status(400).json({
      message: "Please complete the security check before sending your message.",
    });
    return;
  }

  const clientAddress = getClientAddress(request);

  try {
    const verification = await validateTurnstile(
      turnstileToken,
      clientAddress,
      turnstileSecret,
    );

    if (!verification.success || verification.action !== "contact") {
      console.warn("Turnstile rejected a portfolio contact submission:", {
        hostname: verification.hostname,
        action: verification.action,
        errorCodes: verification["error-codes"],
      });
      response.status(403).json({
        message: "Security verification failed. Please complete the check and try again.",
      });
      return;
    }
  } catch (error) {
    console.error("Unable to verify a portfolio contact submission:", error);
    response.status(502).json({
      message: "Security verification is temporarily unavailable. Please try again.",
    });
    return;
  }

  if (isRateLimited(clientAddress)) {
    response.status(429).json({
      message: "Too many messages were submitted. Please wait a few minutes and try again.",
    });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "rafiulislam1020@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    response.status(503).json({
      message: "Email delivery is not configured yet. Please use the direct email link below.",
    });
    return;
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeReason = escapeHtml(reason);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "raffiul-portfolio/1.0",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `UNVERIFIED SENDER: The visitor-provided email address has not been verified.\n\nName: ${name}\nEmail: ${email}\nReason: ${reason}\nSubject: ${subject}\n\n${message}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;max-width:640px;margin:auto">
            <h1 style="font-size:22px;margin-bottom:20px">New portfolio inquiry</h1>
            <div style="margin-bottom:20px;padding:12px 16px;border:1px solid #f59e0b;background:#fffbeb;color:#92400e;font-weight:700">
              Visitor-provided email address — identity not verified. Review the context before replying.
            </div>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr><td style="padding:8px;font-weight:700">Name</td><td style="padding:8px">${safeName}</td></tr>
              <tr><td style="padding:8px;font-weight:700">Email</td><td style="padding:8px">${safeEmail}</td></tr>
              <tr><td style="padding:8px;font-weight:700">Reason</td><td style="padding:8px">${safeReason}</td></tr>
              <tr><td style="padding:8px;font-weight:700">Subject</td><td style="padding:8px">${safeSubject}</td></tr>
            </table>
            <div style="border-left:4px solid #06b6d4;padding:16px;background:#f8fafc">${safeMessage}</div>
          </div>
        `,
      }),
      signal: AbortSignal.timeout(9_000),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("Resend rejected a portfolio contact email:", resendResponse.status, resendError);
      throw new Error("Email provider rejected the request.");
    }

    response.status(200).json({ message: "Thanks! Your message has been sent successfully." });
  } catch (error) {
    console.error("Unable to deliver portfolio contact email:", error);
    response.status(502).json({
      message: "The message could not be delivered right now. Please try again or email me directly.",
    });
  }
}
