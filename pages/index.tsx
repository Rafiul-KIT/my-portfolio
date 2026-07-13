import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:px-8 lg:px-10">
      <Head>
        <title>Md Raffiul Islam — Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Md Raffiul Islam, a Jr. Software Engineer at Karooth IT BD building full-stack web applications with React, Angular, Node.js, Java Spring Boot, and ASP.NET."
        />
      </Head>
      {/* Decorative glow blobs */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-100/40 to-blue-100/40 dark:from-cyan-500/15 dark:to-indigo-500/15 blur-[100px] dark:blur-[120px] -z-10" />
      <div className="absolute top-[60rem] right-0 w-[400px] h-[300px] bg-gradient-to-tr from-indigo-100/20 to-cyan-100/20 dark:from-indigo-500/10 dark:to-cyan-500/10 blur-[100px] dark:blur-[110px] -z-10" />

      <section className="fade-in-up hero-card relative overflow-hidden px-8 py-14 sm:px-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 dark:from-cyan-500/10 via-transparent to-blue-100/10 dark:to-indigo-500/5 pointer-events-none" />
        <div className="relative container-centered space-y-12">
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[9rem] gap-8">
            {/* Photo Container */}
            <div className="relative z-10 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-blue-300 dark:from-cyan-400 dark:to-indigo-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative h-32 w-32 md:h-44 md:w-44 rounded-full border-4 border-white dark:border-white/10 bg-white dark:bg-slate-900 shadow-2xl shadow-cyan-200/50 dark:shadow-cyan-500/20 overflow-hidden mx-auto">
                <Image
                  src="/images/profile_rafi.png"
                  alt="Md Raffiul Islam"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Name Container */}
            <div className="text-center md:flex-1 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:pointer-events-none">
              <div className="md:pointer-events-auto">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl uppercase">
                  Md Raffiul <span className="gradient-text">Islam</span>
                </h2>
                <p className="text-base font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300 mt-2">
                  Jr. Software Engineer · Full-Stack Developer
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-100 dark:border-cyan-400/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300 shadow-sm shadow-cyan-100/60 dark:shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
              </span>
              Available for New Projects
            </div>

            <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-7xl lg:text-7xl leading-[1.05]">
              I build{" "}
              <span className="gradient-text">modern web experiences</span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl mx-auto text-center">
              I design and develop interactive sites, dashboards, and enterprise
              business systems that feel refined, fast, and easy to use on every screen.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 pt-4">
            <Link
              href="/resume"
              className="inline-flex min-h-[3.5rem] items-center justify-center rounded-2xl bg-indigo-600 dark:bg-indigo-500 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-indigo-700 dark:hover:bg-indigo-400 hover:scale-105 shadow-xl shadow-indigo-200 dark:shadow-indigo-500/30 border-2 border-indigo-400 dark:border-indigo-400/50"
            >
              View Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[3.5rem] items-center justify-center rounded-2xl bg-emerald-700 dark:bg-emerald-500 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-800 dark:hover:bg-emerald-400 hover:scale-105 shadow-xl shadow-emerald-200 dark:shadow-emerald-500/30 border-2 border-emerald-500 dark:border-emerald-400/50 animate-blink"
            >
              Hire Me
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              "Responsive UI",
              "Fast performance",
              "Clean component design",
            ].map((item) => (
              <div key={item} className="highlight-chip justify-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mt-48 container-centered">
        <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <p className="section-heading text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
              About me
            </p>
            <h2 className="mt-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl lg:max-w-4xl leading-tight">
              Crafting digital experiences with{" "}
              <span className="gradient-text">precision and passion</span>.
            </h2>

            <div className="mt-10 grid gap-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p className="text-center lg:text-left">
                I&apos;m a Computer Science &amp; Engineering graduate from the
                University of Dhaka (2024), currently working as a Jr. Software
                Engineer at Karooth IT BD, where I build full-stack solutions
                across the web stack — from responsive front-ends to robust
                back-end services.
              </p>
              <p className="text-center lg:text-left">
                My toolkit spans HTML, CSS, Angular, React, Next.js, and Node.js
                on the front end, with Java Spring Boot, C#, and ASP.NET
                powering the back end, backed by MySQL and MongoDB. I enjoy
                turning real-world business requirements into reliable,
                well-structured software.
              </p>
            </div>
          </div>

          <aside className="section-panel p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-600 dark:text-cyan-300">
              Studio highlights
            </p>
            <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
              <div className="space-y-2 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 p-6 shadow-sm shadow-slate-200/40 dark:shadow-black/20 transition-colors hover:border-cyan-200 dark:hover:border-cyan-400/20">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                  Design focus
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Clean, accessible interfaces that scale.
                </p>
              </div>
              <div className="space-y-2 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 p-6 shadow-sm shadow-slate-200/40 dark:shadow-black/20 transition-colors hover:border-cyan-200 dark:hover:border-cyan-400/20">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                  Performance
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Smooth interactions with fast, modern tooling.
                </p>
              </div>
              <div className="space-y-2 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 p-6 shadow-sm shadow-slate-200/40 dark:shadow-black/20 transition-colors hover:border-cyan-200 dark:hover:border-cyan-400/20">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                  Delivery
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Projects built to ship quickly and feel premium.
                </p>
              </div>
            </div>
          </aside>
        </Reveal>
      </section>

      <section className="mt-40 grid gap-10 md:grid-cols-3">
        {[
          {
            title: "Education",
            desc: "B.Sc. in Computer Science & Engineering, University of Dhaka (2024).",
            color: "from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500",
            lightColor: "bg-indigo-50 dark:bg-indigo-500/10",
            textColor: "text-indigo-700 dark:text-indigo-300",
            shadow: "shadow-indigo-200/50 dark:shadow-indigo-500/10",
            border: "border-indigo-100 dark:border-indigo-400/20"
          },
          {
            title: "Experience",
            desc: "Jr. Software Engineer at Karooth IT BD, building full-stack systems since Aug 2024.",
            color: "from-blue-500 to-teal-600 dark:from-cyan-400 dark:to-blue-500",
            lightColor: "bg-blue-50 dark:bg-cyan-500/10",
            textColor: "text-blue-700 dark:text-cyan-300",
            shadow: "shadow-blue-200/50 dark:shadow-cyan-500/10",
            border: "border-blue-100 dark:border-cyan-400/20"
          },
          {
            title: "Contact",
            desc: "Ready to chat about your next project and collaboration.",
            color: "from-green-500 to-lime-600 dark:from-emerald-400 dark:to-teal-500",
            lightColor: "bg-green-50 dark:bg-emerald-500/10",
            textColor: "text-green-700 dark:text-emerald-300",
            shadow: "shadow-green-200/50 dark:shadow-emerald-500/10",
            border: "border-green-100 dark:border-emerald-400/20"
          },
        ].map((card, i) => (
          <Reveal key={card.title} delay={i * 120}>
            <div
              className={`group relative overflow-hidden glass-card rounded-[3rem] p-12 transition-all duration-500 hover:-translate-y-2 text-center border-2 ${card.border} shadow-2xl ${card.shadow}`}
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${card.color}`} />
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                <span className={`inline-block px-8 py-2 rounded-2xl ${card.lightColor} ${card.textColor} transition-transform group-hover:scale-110`}>
                  {card.title}
                </span>
              </h3>
              <p className="mt-8 text-slate-600 dark:text-slate-400 leading-relaxed text-base font-medium">
                {card.desc}
              </p>
              <div className={`mt-8 inline-flex h-1.5 w-12 rounded-full bg-gradient-to-r ${card.color} opacity-40`} />
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
