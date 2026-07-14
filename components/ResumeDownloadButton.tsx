import { useState } from "react";

type ResumeDataResponse = {
  data?: string;
  error?: string;
};

export default function ResumeDownloadButton() {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState("");

  async function downloadResume() {
    setDownloading(true);
    setError("");

    try {
      const response = await fetch("/api/resume-data");
      const payload = (await response.json()) as ResumeDataResponse;

      if (!response.ok || !payload.data) {
        throw new Error(payload.error || "Unable to download the resume.");
      }

      const binary = window.atob(payload.data);
      const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
      const fileUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
      const link = document.createElement("a");

      link.href = fileUrl;
      link.download = "Resume-Raffiul Islam.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
    } catch (downloadError) {
      setError(
        downloadError instanceof Error
          ? downloadError.message
          : "Unable to download the resume.",
      );
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="text-right">
      <button
        type="button"
        onClick={downloadResume}
        disabled={downloading}
        aria-busy={downloading}
        className="cursor-pointer rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:opacity-70"
      >
        Download PDF
      </button>
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
