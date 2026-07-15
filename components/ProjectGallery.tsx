import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { ProjectImage } from "../data/projects";

type ProjectGalleryProps = {
  images: ProjectImage[];
  projectTitle: string;
};

const SLIDE_INTERVAL = 6500;

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const galleryRef = useRef<HTMLElement>(null);
  const scrollingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isPageScrolling, setIsPageScrolling] = useState(false);
  const hasMultipleImages = images.length > 1;
  const activeImage = images[activeIndex];

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "160px 0px", threshold: 0.01 }
    );

    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let scrollTimer: number | undefined;

    const handleScroll = () => {
      if (!scrollingRef.current) {
        scrollingRef.current = true;
        setIsPageScrolling(true);
      }

      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        scrollingRef.current = false;
        setIsPageScrolling(false);
      }, 140);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(scrollTimer);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || !hasMultipleImages || !isVisible || isPageScrolling) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [hasMultipleImages, images.length, isPageScrolling, isPlaying, isVisible]);

  const showPrevious = () => {
    setIsPlaying(false);
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setIsPlaying(false);
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const selectSlide = (index: number) => {
    setIsPlaying(false);
    setActiveIndex(index);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!hasMultipleImages) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  if (!activeImage) return null;

  return (
    <section
      ref={galleryRef}
      aria-label={`${projectTitle} screenshot gallery`}
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="mx-auto mb-20 max-w-5xl rounded-[3rem] border border-slate-200 bg-linear-to-br from-sky-50 via-cyan-50/70 to-indigo-50/80 p-4 shadow-xl shadow-slate-300/50 dark:border-white/10 dark:bg-none dark:bg-slate-900/95 dark:shadow-black/30 sm:p-6"
    >
      <div className="mb-5 flex flex-col items-stretch justify-between gap-4 px-2 sm:flex-row sm:items-center">
        <div className="w-full text-left sm:w-auto">
          <p className="text-left text-xs font-bold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
            Product gallery
          </p>
          <h2 className="mt-2 text-left text-2xl font-black text-slate-900 dark:text-white">
            {hasMultipleImages ? `Explore ${projectTitle} modules` : `${projectTitle} interface`}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 self-end">
          {hasMultipleImages ? (
            <span
              aria-label={`Slide ${activeIndex + 1} of ${images.length}`}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 text-xs font-black text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300"
            >
              <span>{activeIndex + 1}</span>
              <span aria-hidden="true" className="text-cyan-400">/</span>
              <span>{images.length}</span>
            </span>
          ) : null}

        </div>
      </div>

      <figure
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeIndex + 1} of ${images.length}`}
        className="overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 dark:border-white/10 dark:bg-slate-950/50"
      >
        <div
          key={activeImage.src.src}
          className="aspect-[2/1] overflow-hidden bg-slate-100 dark:bg-slate-950"
        >
          <Image
            src={activeImage.src}
            alt={`${projectTitle}: ${activeImage.title}`}
            sizes="(max-width: 1023px) calc(100vw - 3rem), 960px"
            placeholder="blur"
            style={{ animationPlayState: hasMultipleImages && isPlaying && isVisible && !isPageScrolling ? "running" : "paused" }}
            className="gallery-image-motion h-auto w-full object-contain"
          />
        </div>
        <figcaption
          aria-live={isPlaying ? "off" : "polite"}
          className="border-t border-slate-100 bg-white px-6 py-5 text-center dark:border-white/10 dark:bg-slate-900 sm:px-8"
        >
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">{activeImage.title}</h3>
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {activeImage.description}
            </p>
            {hasMultipleImages ? (
              <div className="mt-3 flex items-center justify-center gap-2" aria-label="Slideshow controls">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Show previous screenshot"
                  title="Previous screenshot"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setIsPlaying((playing) => !playing)}
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  aria-pressed={isPlaying}
                  title={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-cyan-400 hover:text-cyan-700 dark:hover:border-cyan-400 dark:hover:text-cyan-300 ${isPlaying ? "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300" : "border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white"}`}
                >
                  {isPlaying ? (
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                      <path d="M7 5.5A1.5 1.5 0 0 1 8.5 4h1A1.5 1.5 0 0 1 11 5.5v13A1.5 1.5 0 0 1 9.5 20h-1A1.5 1.5 0 0 1 7 18.5v-13Zm6 0A1.5 1.5 0 0 1 14.5 4h1A1.5 1.5 0 0 1 17 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-13Z" />
                    </svg>
                  ) : (
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 translate-x-px">
                      <path d="M8.4 5.2a1.5 1.5 0 0 1 2.25-1.3l8.1 4.8a1.5 1.5 0 0 1 0 2.6l-8.1 4.8a1.5 1.5 0 0 1-2.25-1.3V5.2Z" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Show next screenshot"
                  title="Next screenshot"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            ) : null}
          </div>
        </figcaption>
      </figure>

      {hasMultipleImages ? (
        <div className="skill-scroll mt-5 flex gap-3 overflow-x-auto px-1 pb-2" aria-label="Choose a screenshot">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={image.src.src}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={`Show ${image.title}`}
                aria-current={isActive ? "true" : undefined}
                className={`w-32 shrink-0 rounded-2xl border p-2 text-left transition sm:w-36 ${isActive ? "border-cyan-500 bg-cyan-50 dark:border-cyan-400 dark:bg-cyan-400/10" : "border-slate-200 bg-white hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/50"}`}
              >
                <span className="relative block aspect-[2/1] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="144px"
                    className="object-cover object-top"
                  />
                </span>
                <span className="mt-2 block truncate text-xs font-bold text-slate-700 dark:text-slate-300">
                  {image.title}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
