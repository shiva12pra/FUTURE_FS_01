function TimelineItem({ entry }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 shadow-sm">
      <span className="absolute -left-5 top-8 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950/90 ring-4 ring-slate-950 ring-offset-1 ring-offset-slate-950">
        <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
      </span>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-300">{entry.year}</p>
        <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-400">{entry.location}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{entry.title}</h3>
      <p className="mt-2 text-slate-400 leading-7">{entry.institution}</p>
      <p className="mt-4 text-sm text-slate-500">{entry.details}</p>
    </div>
  );
}

export default TimelineItem;
