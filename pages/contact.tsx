import Head from "next/head";
import { useState } from "react";
import Reveal from "../components/Reveal";

const contacts = [
  { title: "Email", value: "rafiulislam1020@gmail.com", href: "mailto:rafiulislam1020@gmail.com" },
  { title: "Phone", value: "+8801799605349", href: "tel:+8801799605349" },
  { title: "WhatsApp", value: "+8801719007226", href: "https://wa.me/8801719007226", external: true },
  { title: "Location", value: "Dhaka, Bangladesh" },
];

const CONTACT_EMAIL = "rafiulislam1020@gmail.com";

export default function Contact() {
  const [submitNotice, setSubmitNotice] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim() ?? "";
    const email = form.get("email")?.toString().trim() ?? "";
    const message = form.get("message")?.toString().trim() ?? "";

    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n\u2014 ${name} (${email})`;

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitNotice("Your default email app should now open with the message ready to send.");
    window.location.href = mailtoUrl;
  };

  return (
    <main id="main-content" tabIndex={-1} className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 sm:px-8 lg:px-10">
      <Head>
        <title>Contact | Md Raffiul Islam</title>
        <meta
          name="description"
          content="Get in touch with Md Raffiul Islam for full-stack development projects and collaboration."
        />
      </Head>
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 dark:from-cyan-500/10 dark:to-indigo-500/10 blur-[110px] -z-10" />

      <section className="container-centered mb-16 fade-in-up">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Contact</p>
        <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl text-center leading-tight">
          Let&apos;s build something <span className="gradient-text">great</span> together
        </h1>
        <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg text-center max-w-2xl">
          Reach out for new projects, freelance work, or collaborations. I am always happy to discuss new ideas and help bring them to life.
        </p>
      </section>

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
        <div className="grid gap-6 sm:grid-cols-1">
          {contacts.map((contact, i) => (
            <Reveal key={contact.title} delay={i * 90}>
              <div className="glass-card rounded-3xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">{contact.title}</p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noreferrer" : undefined}
                    className="mt-3 inline-block break-all text-lg font-bold text-slate-900 underline decoration-cyan-500/40 underline-offset-4 transition hover:text-cyan-700 dark:text-white dark:hover:text-cyan-300"
                  >
                    {contact.value}
                    {contact.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                  </a>
                ) : (
                  <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{contact.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-[2.5rem] border border-slate-100 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-sm p-10 shadow-xl shadow-slate-200/40 dark:shadow-black/30 transition-all hover:-translate-y-0.5">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  maxLength={80}
                  className="w-full rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-4 text-slate-900 dark:text-white dark:placeholder:text-slate-500 outline-none transition focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 dark:focus:ring-cyan-400/10"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  maxLength={120}
                  className="w-full rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-4 text-slate-900 dark:text-white dark:placeholder:text-slate-500 outline-none transition focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 dark:focus:ring-cyan-400/10"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={2000}
                className="w-full rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-4 text-slate-900 dark:text-white dark:placeholder:text-slate-500 outline-none transition focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 dark:focus:ring-cyan-400/10"
                placeholder="Tell me about your project"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full min-h-[3.5rem] items-center justify-center rounded-2xl bg-slate-900 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-indigo-500 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 dark:hover:brightness-110 hover:scale-[1.01] shadow-lg shadow-slate-200 dark:shadow-cyan-500/20"
            >
              Compose Email
            </button>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              This opens your default email app. You can also email me directly at{" "}
              <a className="font-semibold underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>
            <p aria-live="polite" className="min-h-6 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              {submitNotice}
            </p>
          </form>
        </Reveal>
      </div>
    </main>
  );
}
