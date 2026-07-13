import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { projects, type Project } from "../../data/projects";
import Reveal from "../../components/Reveal";

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
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors mb-8">
          ← Back to projects
        </Link>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Project details</p>
        <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl text-center leading-tight">
          {project.title}
        </h1>
        <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg text-center max-w-3xl">
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-cyan-50 dark:bg-cyan-400/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-400/20">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[3.5rem] items-center justify-center rounded-2xl bg-indigo-600 dark:bg-indigo-500 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-indigo-700 dark:hover:bg-indigo-400 hover:scale-105 shadow-xl shadow-indigo-200 dark:shadow-indigo-500/30 border-2 border-indigo-400 dark:border-indigo-400/50">
            View Live Project
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[3.5rem] items-center justify-center rounded-2xl bg-emerald-700 dark:bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-800 dark:hover:bg-emerald-400 hover:scale-105 shadow-xl shadow-emerald-200 dark:shadow-emerald-500/30 border-2 border-emerald-500 dark:border-emerald-400/50">
            GitHub Repo
          </a>
        </div>
      </section>

      <Reveal>
        <section className="relative group max-w-4xl mx-auto mb-20">
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 dark:border-white/10 bg-white dark:bg-slate-900/60 p-3 shadow-2xl shadow-slate-200/50 dark:shadow-black/40">
            <Image src={project.image} alt={project.title} width={1200} height={675} className="rounded-[2.5rem] object-cover" />
          </div>
        </section>
      </Reveal>

      <section className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
        <Reveal>
          <div className="rounded-[3rem] border-2 border-indigo-100 dark:border-indigo-400/20 bg-white dark:bg-slate-900/60 p-10 text-center shadow-xl shadow-indigo-100/40 dark:shadow-indigo-500/10">
            <h2 className="text-2xl font-black mb-8 px-6 py-2 bg-indigo-50 dark:bg-indigo-500/10 inline-block rounded-2xl text-indigo-700 dark:text-indigo-300">Key challenges</h2>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="rounded-2xl bg-slate-50 dark:bg-white/5 p-6 border border-slate-100 dark:border-white/10 text-sm font-bold leading-relaxed">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-[3rem] border-2 border-emerald-100 dark:border-emerald-400/20 bg-white dark:bg-slate-900/60 p-10 text-center shadow-xl shadow-emerald-100/40 dark:shadow-emerald-500/10">
            <h2 className="text-2xl font-black mb-8 px-6 py-2 bg-emerald-50 dark:bg-emerald-500/10 inline-block rounded-2xl text-emerald-700 dark:text-emerald-300">Future plans</h2>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              {project.improvements.map((improvement) => (
                <li key={improvement} className="rounded-2xl bg-slate-50 dark:bg-white/5 p-6 border border-slate-100 dark:border-white/10 text-sm font-bold leading-relaxed">
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};
