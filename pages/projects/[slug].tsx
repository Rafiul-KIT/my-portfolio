import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import ProjectGallery from "../../components/ProjectGallery";
import Reveal from "../../components/Reveal";
import { projects, type Project } from "../../data/projects";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  return (
    <main id="main-content" tabIndex={-1} className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 lg:px-10">
      <Head>
        <title>{`${project.title} | Md Raffiul Islam`}</title>
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
        <ProjectGallery images={project.images} projectTitle={project.title} />
      </Reveal>

      {project.caseStudy ? (
        <div className="mx-auto mb-24 max-w-5xl space-y-16">
          <Reveal>
            <section
              aria-labelledby="case-study-overview"
              className="overflow-hidden rounded-[3rem] border border-cyan-100 bg-white p-8 shadow-xl shadow-cyan-100/40 dark:border-cyan-400/20 dark:bg-slate-900/60 dark:shadow-cyan-500/10 sm:p-12"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
                Case study
              </p>
              <h2
                id="case-study-overview"
                className="mt-4 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl"
              >
                Platform modernization
              </h2>
              <p className="mt-6 max-w-4xl text-center text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                {project.caseStudy.overview}
              </p>
            </section>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal className="h-full">
              <section
                aria-labelledby="case-study-challenge"
                className="h-full rounded-[3rem] border-2 border-amber-100 bg-white p-8 shadow-xl shadow-amber-100/30 dark:border-amber-400/20 dark:bg-slate-900/60 dark:shadow-amber-500/10 sm:p-10"
              >
                <h2 id="case-study-challenge" className="text-2xl font-black text-amber-700 dark:text-amber-300">
                  The challenge
                </h2>
                <ul className="mt-8 space-y-4 text-left text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.caseStudy.challenges.map((challenge) => (
                    <li key={challenge} className="flex gap-3 rounded-2xl bg-amber-50/70 p-4 dark:bg-amber-400/5">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal className="h-full" delay={100}>
              <section
                aria-labelledby="case-study-solution"
                className="flex h-full flex-col justify-center rounded-[3rem] border-2 border-cyan-100 bg-white p-8 shadow-xl shadow-cyan-100/30 dark:border-cyan-400/20 dark:bg-slate-900/60 dark:shadow-cyan-500/10 sm:p-10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
                  Modernization approach
                </p>
                <h2 id="case-study-solution" className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
                  Microservices + micro frontends
                </h2>
                <p className="mt-8 text-left text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.caseStudy.solution}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {["Unified portal", "Domain services", "Independent modules", "Secure APIs"].map((item) => (
                    <span key={item} className="rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-bold text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          <section aria-labelledby="service-architecture" className="content-auto">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
                Architecture
              </p>
              <h2 id="service-architecture" className="mt-4 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                Domain-focused services
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {project.caseStudy.domains.map((domain, index) => (
                <Reveal key={domain.title} className="h-full" delay={index * 80}>
                  <article className="h-full rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/20">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">{domain.title}</h3>
                    <ul className="mt-6 space-y-3 text-left text-sm text-slate-600 dark:text-slate-400">
                      {domain.capabilities.map((capability) => (
                        <li key={capability} className="flex items-start gap-3">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section aria-labelledby="engineering-improvements" className="content-auto">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">
                Engineering improvements
              </p>
              <h2 id="engineering-improvements" className="mt-4 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                What the modernization changed
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {project.caseStudy.engineeringImprovements.map((improvement, index) => (
                <Reveal key={improvement.title} className="h-full" delay={index * 70}>
                  <article className="h-full rounded-[2rem] border border-indigo-100 bg-indigo-50/60 p-7 dark:border-indigo-400/20 dark:bg-indigo-400/5">
                    <h3 className="text-lg font-black text-indigo-700 dark:text-indigo-300">{improvement.title}</h3>
                    <p className="mt-3 text-left text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {improvement.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <div className="content-auto grid gap-8 lg:grid-cols-2">
            <Reveal className="h-full">
              <section aria-labelledby="business-impact" className="h-full rounded-[3rem] border-2 border-emerald-100 bg-white p-8 dark:border-emerald-400/20 dark:bg-slate-900/60 sm:p-10">
                <h2 id="business-impact" className="text-2xl font-black text-emerald-700 dark:text-emerald-300">
                  Business impact
                </h2>
                <ul className="mt-8 space-y-4 text-left text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.caseStudy.impact.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="font-black text-emerald-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal className="h-full" delay={100}>
              <section aria-labelledby="my-contributions" className="h-full rounded-[3rem] border-2 border-violet-100 bg-white p-8 dark:border-violet-400/20 dark:bg-slate-900/60 sm:p-10">
                <h2 id="my-contributions" className="text-2xl font-black text-violet-700 dark:text-violet-300">
                  My contributions
                </h2>
                <ul className="mt-8 space-y-4 text-left text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.caseStudy.contributions.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>
        </div>
      ) : null}

      <section className="content-auto mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-[32rem] flex-col rounded-[3rem] border-2 border-indigo-100 bg-white p-10 text-center shadow-xl shadow-indigo-100/40 dark:border-indigo-400/20 dark:bg-slate-900/60 dark:shadow-indigo-500/10">
            <h2 className="mb-8 inline-block rounded-2xl bg-indigo-50 px-6 py-2 text-2xl font-black text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
              Project highlights
            </h2>
            <ul className="skill-scroll min-h-0 flex-1 space-y-4 overflow-y-auto pr-2 text-slate-600 dark:text-slate-400">
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

        <Reveal className="h-full" delay={120}>
          <div className="flex h-[32rem] flex-col rounded-[3rem] border-2 border-emerald-100 bg-white p-10 text-center shadow-xl shadow-emerald-100/40 dark:border-emerald-400/20 dark:bg-slate-900/60 dark:shadow-emerald-500/10">
            <h2 className="mb-8 inline-block rounded-2xl bg-emerald-50 px-6 py-2 text-2xl font-black text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
              Core capabilities
            </h2>
            <ul className="skill-scroll min-h-0 flex-1 space-y-4 overflow-y-auto pr-2 text-slate-600 dark:text-slate-400">
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
