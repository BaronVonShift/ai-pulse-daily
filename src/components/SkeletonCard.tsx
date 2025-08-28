const SkeletonCard = () => (
  <div className="h-full rounded-2xl border border-glass-border bg-glass-bg/70 p-6">
    <div className="mb-4 h-40 w-full animate-pulse rounded-xl bg-muted/40" />
    <div className="mb-2 h-4 w-32 animate-pulse rounded bg-muted/40" />
    <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-muted/40" />
    <div className="space-y-2">
      <div className="h-3 w-full animate-pulse rounded bg-muted/40" />
      <div className="h-3 w-5/6 animate-pulse rounded bg-muted/40" />
    </div>
  </div>
);
export default SkeletonCard;
