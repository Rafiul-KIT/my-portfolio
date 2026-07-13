import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

type PdfLoadResult = {
  numPages: number;
};

export default function ResumePdfViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [pdfSource, setPdfSource] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/resume-data", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to fetch the resume (status ${response.status}).`);
        }

        return response.json() as Promise<{ data: string }>;
      })
      .then(({ data }) => {
        setPdfSource(`data:application/pdf;base64,${data}`);
      })
      .catch((fetchError: Error) => {
        if (fetchError.name !== "AbortError") setError(fetchError.message);
      });

    return () => controller.abort();
  }, []);

  function handleLoadSuccess({ numPages: loadedPages }: PdfLoadResult) {
    setNumPages(loadedPages);
    setError("");
  }

  return (
    <div ref={containerRef} className="w-full">
      {error ? (
        <div className="rounded-xl border border-red-200 bg-white p-8 text-center text-red-700 shadow-lg">
          <p className="font-bold">The PDF preview could not be loaded.</p>
          <p className="mt-2 text-sm">{error}</p>
        </div>
      ) : null}

      {containerWidth > 0 && pdfSource ? (
        <Document
          file={pdfSource}
          onLoadSuccess={handleLoadSuccess}
          onLoadError={(loadError) => setError(loadError.message)}
          loading={
            <div className="rounded-xl bg-white p-12 text-center text-slate-600 shadow-lg">
              Loading resume…
            </div>
          }
          className="space-y-4"
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`resume-page-${index + 1}`}
              pageNumber={index + 1}
              width={Math.floor(containerWidth)}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className="mx-auto overflow-hidden rounded-xl bg-white shadow-lg"
            />
          ))}
        </Document>
      ) : null}
    </div>
  );
}
