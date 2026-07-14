import Head from "next/head";
import dynamic from "next/dynamic";
import ResumeDownloadButton from "../components/ResumeDownloadButton";
import ResumeLoadingState from "../components/ResumeLoadingState";

const ResumePdfViewer = dynamic(() => import("../components/ResumePdfViewer"), {
  ssr: false,
  loading: () => <ResumeLoadingState />,
});

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Md Raffiul Islam</title>
        <meta
          name="description"
          content="Resume of Md Raffiul Islam, Software Engineer."
        />
      </Head>

      <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6">
        <div className="mb-4 flex justify-end">
          <ResumeDownloadButton />
        </div>

        <ResumePdfViewer />
      </main>
    </>
  );
}
