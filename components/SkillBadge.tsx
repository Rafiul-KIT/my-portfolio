type SkillBadgeProps = {
  label: string;
};

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <div className="w-full rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-r from-slate-50 via-white to-slate-100 dark:bg-none dark:bg-white/5 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm shadow-slate-200/50 dark:shadow-black/20 transition-all hover:-translate-y-0.5 hover:border-cyan-200 dark:hover:border-cyan-400/30 hover:bg-white dark:hover:bg-cyan-400/5 hover:text-slate-900 dark:hover:text-cyan-200 text-center">
      {label}
    </div>
  );
}
