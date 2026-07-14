import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const currentPath = router.asPath.split("?")[0];

  const isActive = (href: string) => {
    if (href === "/#about") return currentPath === "/#about";
    if (href === "/") return currentPath === "/";
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    router.events.on("routeChangeComplete", closeMenu);
    router.events.on("hashChangeComplete", closeMenu);

    return () => {
      router.events.off("routeChangeComplete", closeMenu);
      router.events.off("hashChangeComplete", closeMenu);
    };
  }, [router.events]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_-24px_rgba(15,23,42,0.4)] transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/95 dark:shadow-black/30">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 w-full items-center justify-between">
          <div className="flex flex-1 justify-start">
            <Link
              href="/"
              aria-label="Md Raffiul Islam, home"
              className="group inline-flex items-center gap-3 text-lg font-bold text-slate-900 transition-opacity hover:opacity-90 dark:text-white"
            >
              <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 text-white shadow-md shadow-cyan-500/10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 dark:from-cyan-400 dark:to-indigo-500 dark:shadow-cyan-500/30">R</span>
              <span className="hidden sm:block">Md Raffiul Islam</span>
            </Link>
          </div>

          <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center gap-6 md:flex lg:gap-10">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? (item.href.includes("#") ? "location" : "page") : undefined}
                  className={`nav-link text-sm font-semibold transition hover:text-cyan-600 dark:hover:text-cyan-300 ${active ? "active text-cyan-700 dark:text-cyan-300" : "text-slate-600 dark:text-slate-300"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300 md:hidden"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-navigation"
              aria-expanded={open}
            >
              <span className={`hamburger ${open ? "open" : ""}`} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-menu open border-t border-slate-100 bg-white px-6 py-6 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/95 md:hidden"
          >
            <div className="flex flex-col gap-4 text-center">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? (item.href.includes("#") ? "location" : "page") : undefined}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-4 py-2 text-base font-bold transition hover:text-cyan-600 dark:hover:text-cyan-300 ${active ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300" : "text-slate-900 dark:text-white"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
