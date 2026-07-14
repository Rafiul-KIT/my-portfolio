type ResumeLoadingStateProps = {
  isHidden?: boolean;
};

export default function ResumeLoadingState({ isHidden = false }: ResumeLoadingStateProps) {
  return (
    <div
      aria-hidden={isHidden || undefined}
      aria-live={isHidden ? undefined : "polite"}
      className={`overflow-hidden rounded-xl border border-slate-200 bg-slate-100 p-2 shadow-lg transition-opacity duration-300 sm:p-3 dark:border-slate-700 dark:bg-slate-900 ${
        isHidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role={isHidden ? undefined : "status"}
    >
      <div className="aspect-[17/22] w-full animate-pulse rounded-lg bg-white px-[8%] py-[7%]">
        <div className="mx-auto h-5 w-2/5 rounded-full bg-slate-200 sm:h-7" />
        <div className="mx-auto mt-4 h-2.5 w-3/5 rounded-full bg-slate-100" />

        <div className="mt-[7%] space-y-3">
          <div className="h-3 w-1/4 rounded-full bg-slate-200" />
          <div className="h-px w-full bg-slate-200" />
          <div className="h-2.5 w-full rounded-full bg-slate-100" />
          <div className="h-2.5 w-11/12 rounded-full bg-slate-100" />
          <div className="h-2.5 w-4/5 rounded-full bg-slate-100" />
        </div>

        <div className="mt-[7%] space-y-3">
          <div className="h-3 w-1/3 rounded-full bg-slate-200" />
          <div className="h-px w-full bg-slate-200" />
          <div className="h-2.5 w-full rounded-full bg-slate-100" />
          <div className="h-2.5 w-5/6 rounded-full bg-slate-100" />
          <div className="h-2.5 w-11/12 rounded-full bg-slate-100" />
        </div>

        <p className="mt-[10%] text-sm font-semibold text-slate-500">
          Preparing resume preview...
        </p>
      </div>
    </div>
  );
}
