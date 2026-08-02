function TimelineItem({ entry }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-lift backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-transparent" />
      <span className="absolute -left-5 top-8 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 ring-4 ring-slate-950 ring-offset-1 ring-offset-slate-950">
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
      </span>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{entry.year}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{entry.title}</h3>
        </div>
        {entry.location ? (
          <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {entry.location}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-slate-400 leading-7">{entry.institution}</p>
      <p className="mt-4 text-sm text-slate-500">{entry.details}</p>
    </div>
  );
}

export default TimelineItem;
