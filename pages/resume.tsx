import Head from "next/head";
import Image from "next/image";

const NAVY = "#1e2a4a";

const contactRows: { icon: "phone" | "mail" | "facebook" | "location"; text: string; href?: string }[] = [
  { icon: "phone", text: "+8801799605349" },
  { icon: "mail", text: "rafiulislam1020@gmail.com" },
  { icon: "facebook", text: "Rafiul Islam", href: "https://www.facebook.com/profile.php?id=61577964661660" },
  { icon: "location", text: "Navy Colony, Mirpur-14, Dhaka-1206, Dhaka" },
];

const education = [
  { title: "B.Sc. in CSE", place: "University of Dhaka", period: "2019 – 2024" },
  { title: "HSC, 2018", place: "B.N School & College, Khulna", period: "GPA-5.00" },
  { title: "SSC, 2016", place: "B.N School & College, Khulna", period: "GPA-5.00" },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Karooth IT BD",
    period: "Aug 2024 — Present",
    bullets: [
      "Full-stack development across enterprise systems: SNSOP MIS, MIMS, Education ERP, and a Training Management System (TMS).",
      "Build front-end interfaces and back-end services with React, Angular, Node.js, Java Spring Boot, and ASP.NET.",
      "Work with MySQL and MongoDB-backed features from requirements through deployment.",
    ],
  },
];

const skillGroups = [
  { title: "Frontend", text: "HTML, CSS, JavaScript, React, Angular, Next.js" },
  { title: "Backend", text: "Node.js, Java Spring Boot, C#, ASP.NET" },
  { title: "Database", text: "MySQL, MongoDB — normalization, joins, basic warehousing" },
  { title: "Tools & Platforms", text: "Git, GitHub, Linux, Windows" },
  { title: "Core CS", text: "Data structures & algorithms, OOP, design patterns" },
];

const traits = [
  "Honesty, integrity, and capability to work under pressure.",
  "Strong analytical and people-management skills.",
  "Accuracy and attention to detail.",
  "Effective in group work and cross-functional projects.",
  "Passion for constant improvement.",
  "Ability to make sound decisions.",
];

function ContactIcon({ type }: { type: "phone" | "mail" | "facebook" | "location" }) {
  const paths: Record<string, string> = {
    phone:
      "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z",
    mail: "M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 2.5V17h14V6.5l-7 5.25L5 6.5zm.9-1L12 10.5l6.1-5H5.9z",
    facebook:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    location:
      "M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d={paths[type]} />
    </svg>
  );
}

export default function Resume() {
  return (
    <main className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 sm:px-8 lg:px-10 print:max-w-none print:px-0 print:pt-0 print:pb-0">
      <Head>
        <title>Resume | Md Raffiul Islam</title>
        <meta
          name="description"
          content="Resume of Md Raffiul Islam, Software Engineer at Karooth IT BD."
        />
      </Head>

      <div className="flex items-center justify-between mb-8 print:hidden">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Resume</p>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-5 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 transition-all hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300"
          >
            Download PDF
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-indigo-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-indigo-700 dark:hover:brightness-110 shadow-md shadow-indigo-200 dark:shadow-cyan-500/20"
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Resume card — fixed light/navy palette regardless of site theme, matches original CV design */}
      <article className="relative overflow-hidden rounded-[1.5rem] bg-white text-slate-900 shadow-xl shadow-slate-900/10 print:rounded-none print:shadow-none">
        {/* Decorative navy banner behind photo */}
        <div
          className="absolute top-0 left-0 w-72 h-44 print:w-52 print:h-32 -z-0"
          style={{ background: NAVY, clipPath: "polygon(0 0, 62% 0, 38% 100%, 0 100%)" }}
        />
        {/* Decorative hatch-pattern corner circles */}
        <div
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-[0.12] print:opacity-10"
          style={{ background: `repeating-linear-gradient(45deg, ${NAVY} 0, ${NAVY} 1.5px, transparent 1.5px, transparent 7px)` }}
        />
        <div
          className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-[0.12] print:opacity-10"
          style={{ background: `repeating-linear-gradient(45deg, ${NAVY} 0, ${NAVY} 1.5px, transparent 1.5px, transparent 7px)` }}
        />
        <div
          className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-[0.08] print:opacity-10"
          style={{ background: `repeating-linear-gradient(45deg, ${NAVY} 0, ${NAVY} 1.5px, transparent 1.5px, transparent 7px)` }}
        />

        <div className="relative z-10 p-10 sm:p-14 print:p-9">
          {/* Header: photo + name */}
          <div className="flex flex-wrap items-center gap-8 print:gap-5">
            <div className="relative h-32 w-32 sm:h-36 sm:w-36 print:h-24 print:w-24 shrink-0 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/images/profile_rafi.png"
                alt="Md Raffiul Islam"
                width={288}
                height={288}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl print:text-2xl font-black uppercase tracking-tight" style={{ color: NAVY }}>
                Md Raffiul Islam
              </h1>
              <p className="mt-1 text-base sm:text-lg print:text-sm font-bold text-slate-600">
                BSc. in CSE, University of Dhaka · Software Engineer
              </p>
            </div>
          </div>

          {/* About Me */}
          <section className="mt-10 print:mt-5 text-center">
            <h2 className="text-lg print:text-base font-black uppercase tracking-wide" style={{ color: NAVY }}>
              About Me
            </h2>
            <p className="mt-4 print:mt-2 max-w-3xl mx-auto text-sm print:leading-snug leading-relaxed text-slate-600">
              Full-stack developer with a B.Sc. in Computer Science &amp; Engineering from the
              University of Dhaka, now working as a Software Engineer at Karooth IT BD. I build
              enterprise web systems end to end — from responsive front-ends to reliable back-end
              services — and bring the same problem-solving mindset and attention to detail from my
              academic foundation into every project I ship.
            </p>
          </section>

          <div className="mt-10 print:mt-5 h-1.5 print:h-1 w-full rounded-full" style={{ background: NAVY }} />

          {/* Two-column body */}
          <div className="mt-10 print:mt-5 grid gap-10 print:gap-8 sm:grid-cols-[0.85fr_1.15fr]">
            {/* Left column */}
            <div className="space-y-8 print:space-y-5">
              <div className="space-y-4 print:space-y-2.5">
                {contactRows.map((row) => (
                  <div key={row.text} className="flex items-center gap-3 text-sm text-slate-700">
                    <span
                      className="flex h-8 w-8 print:h-7 print:w-7 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: NAVY }}
                    >
                      <ContactIcon type={row.icon} />
                    </span>
                    {row.href ? (
                      <a href={row.href} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-300 hover:decoration-slate-500">
                        {row.text}
                      </a>
                    ) : (
                      <span>{row.text}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="print:break-inside-avoid">
                <div className="text-center text-sm font-bold uppercase tracking-widest text-white py-2 print:py-1.5 rounded" style={{ background: NAVY }}>
                  Education
                </div>
                <div className="mt-4 print:mt-3 space-y-3 print:space-y-2 text-sm print:leading-snug">
                  {education.map((edu) => (
                    <div key={edu.title}>
                      <p className="font-bold text-slate-900">{edu.title}</p>
                      <p className="text-slate-600">{edu.place}</p>
                      <p className="text-slate-500">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8 print:space-y-4">
              <div className="print:break-inside-avoid">
                <div className="text-center text-sm font-bold uppercase tracking-widest text-white py-2 print:py-1.5 rounded" style={{ background: NAVY }}>
                  Experience
                </div>
                <div className="mt-4 print:mt-2 space-y-4 print:space-y-2 text-sm">
                  {experience.map((job) => (
                    <div key={job.role}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <p className="font-bold text-slate-900">{job.role} · {job.company}</p>
                        <p className="text-slate-500">{job.period}</p>
                      </div>
                      <ul className="mt-2 print:mt-1 space-y-1.5 print:space-y-0.5 print:leading-snug list-disc pl-5 text-slate-600 leading-relaxed">
                        {job.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="print:break-inside-avoid">
                <div className="text-center text-sm font-bold uppercase tracking-widest text-white py-2 print:py-1.5 rounded" style={{ background: NAVY }}>
                  Technical Skills
                </div>
                <ul className="mt-4 print:mt-2 space-y-2.5 print:space-y-1.5 print:leading-snug text-sm text-slate-700">
                  {skillGroups.map((group) => (
                    <li key={group.title}>
                      <span className="font-bold text-slate-900">{group.title}: </span>
                      {group.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="print:break-inside-avoid">
                <div className="text-center text-sm font-bold uppercase tracking-widest text-white py-2 print:py-1.5 rounded" style={{ background: NAVY }}>
                  Personal Traits
                </div>
                <ul className="mt-4 print:mt-2 space-y-1.5 print:space-y-1 print:leading-snug list-disc pl-5 text-sm text-slate-700 leading-relaxed">
                  {traits.map((trait) => (
                    <li key={trait}>{trait}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
