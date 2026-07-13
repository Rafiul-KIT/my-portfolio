import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import Reveal from "../../components/Reveal";
import { projects, type Project } from "../../data/projects";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  return (
    <main className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 lg:px-10">
      <Head>
        <title>{project.title} | Md Raffiul Islam</title>
        <meta name="description" content={project.description} />
      </Head>

      <section className="container-centered mb-16 fade-in-up">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
        >
          ← Back to projects
        </Link>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
          Project details
        </p>
        <h1 className="mt-6 text-center text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
          {project.title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex min-h-[3.5rem] items-center justify-center rounded-2xl border-2 border-indigo-400 bg-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:scale-105 hover:bg-indigo-700 dark:border-indigo-400/50 dark:bg-indigo-500 dark:shadow-indigo-500/30 dark:hover:bg-indigo-400"
        >
          View Live Project
        </a>
      </section>

      <Reveal>
        <section className="mx-auto mb-20 grid max-w-5xl gap-8">
          {project.images.map((image, index) => (
            <div
              key={image}
              className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-3 shadow-2xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/40"
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={1920}
                height={1080}
                className="h-auto w-full rounded-[2.5rem] object-contain"
              />
            </div>
          ))}
        </section>
      </Reveal>

      <section className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <Reveal>
          <div className="rounded-[3rem] border-2 border-indigo-100 bg-white p-10 text-center shadow-xl shadow-indigo-100/40 dark:border-indigo-400/20 dark:bg-slate-900/60 dark:shadow-indigo-500/10">
            <h2 className="mb-8 inline-block rounded-2xl bg-indigo-50 px-6 py-2 text-2xl font-black text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
              Project highlights
            </h2>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-sm font-bold leading-relaxed dark:border-white/10 dark:bg-white/5"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[3rem] border-2 border-emerald-100 bg-white p-10 text-center shadow-xl shadow-emerald-100/40 dark:border-emerald-400/20 dark:bg-slate-900/60 dark:shadow-emerald-500/10">
            <h2 className="mb-8 inline-block rounded-2xl bg-emerald-50 px-6 py-2 text-2xl font-black text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
              Core capabilities
            </h2>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              {project.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-sm font-bold leading-relaxed dark:border-white/10 dark:bg-white/5"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { notFound: true };

  return { props: { project } };
};
