type SkillBadgeProps = {
  label: string;
};

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <div className="w-full rounded-3xl border border-slate-200 bg-linear-to-r from-sky-50 via-cyan-50/70 to-indigo-50/80 px-5 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/50 transition-all hover:-translate-y-0.5 hover:border-cyan-200 hover:text-slate-900 dark:border-white/10 dark:bg-none dark:bg-white/5 dark:text-slate-300 dark:shadow-black/20 dark:hover:border-cyan-400/30 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-200">
      {label}
    </div>
  );
}
