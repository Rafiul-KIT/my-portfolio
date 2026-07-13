import Head from "next/head";
import SkillBadge from "../components/SkillBadge";
import Reveal from "../components/Reveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Angular", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Java Spring Boot", "C#", "ASP.NET"],
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "MongoDB", "Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <main className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:px-8 lg:px-10">
      <Head>
        <title>Skills & Tech Stack | Md Raffiul Islam</title>
        <meta
          name="description"
          content="Technical skills of Md Raffiul Islam across frontend, backend, and database technologies."
        />
      </Head>
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 dark:from-cyan-500/10 dark:to-indigo-500/10 blur-[110px] -z-10" />

      <section className="container-centered mb-20 max-w-3xl fade-in-up">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Skills & Tech Stack</p>
        <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl">
          Powering <span className="gradient-text">Modern Web</span>
        </h1>
        <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg text-center">
          I organize my capability into frontend, backend, and tooling so every project stays maintainable and ready to ship.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-3 lg:max-w-6xl mx-auto">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 120}>
            <div className="group glass-card rounded-[2.5rem] p-10 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-cyan-500/10 text-center">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-10 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">{category.title}</h2>
              <div className="grid gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
