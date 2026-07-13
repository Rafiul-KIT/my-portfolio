import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header relative z-50 transition-all duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex w-full items-center justify-between px-6 py-4 rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-black/30">
          <div className="flex-1 flex justify-start">
          <Link href="/" className="group inline-flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white transition-opacity hover:opacity-90">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 dark:from-cyan-400 dark:to-indigo-500 text-white shadow-md shadow-cyan-500/10 dark:shadow-cyan-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">R</span>
            <span className="hidden sm:block">Md Raffiul Islam</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-10 sm:flex flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-semibold text-slate-600 dark:text-slate-300 transition hover:text-cyan-600 dark:hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex justify-end items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 transition hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 sm:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className={`hamburger ${open ? "open" : ""}`} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-menu open border-t border-slate-100 dark:border-white/10 bg-white dark:bg-slate-950/95 backdrop-blur-md px-6 py-6 sm:hidden">
          <div className="flex flex-col gap-4 text-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-bold text-slate-900 dark:text-white transition hover:text-cyan-600 dark:hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      </div>
    </header>
  );
}
