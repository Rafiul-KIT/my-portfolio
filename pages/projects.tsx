import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main id="main-content" tabIndex={-1} className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:px-8 lg:px-10">
      <Head>
        <title>Projects | Md Raffiul Islam</title>
        <meta
          name="description"
          content="Enterprise software projects built by Md Raffiul Islam with Angular, TypeScript, Java, and Spring Boot."
        />
      </Head>
      <section className="container-centered mb-20 max-w-3xl fade-in-up">
        <div className="hero-card p-10 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Projects Showcase</p>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Highlighted <span className="gradient-text">Work</span>
          </h1>
          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg text-center">
            Explore enterprise platforms I have helped build across social protection,
            education, training, learning management, and school administration.
          </p>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 100}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.stack}
              href={`/projects/${project.slug}`}
              image={project.image}
            />
          </Reveal>
        ))}
      </section>
    </main>
  );
}
