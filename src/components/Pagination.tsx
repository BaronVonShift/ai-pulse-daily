interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
  disabled?: boolean;
}

function rangeWithEllipsis(current: number, total: number): (number | "...")[] {
  const delta = 1;
  const out: (number | "...")[] = [1];
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);
  if (left > 2) out.push("...");
  for (let i = left; i <= right; i++) out.push(i);
  if (right < total - 1) out.push("...");
  if (total > 1) out.push(total);
  return out;
}

const Pagination = ({ page, totalPages, onChange, disabled }: PaginationProps) => {
  if (totalPages <= 1) return null;
  const items = rangeWithEllipsis(page, totalPages);

  return (
    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
      <button className="rounded-md border px-3 py-1 text-sm disabled:opacity-50"
        onClick={() => onChange(Math.max(1, page - 1))} disabled={disabled || page === 1}>
        Prev
      </button>

      {items.map((it, i) =>
        it === "..." ? (
          <span key={`e-${i}`} className="px-2 text-muted-foreground">…</span>
        ) : (
          <button
            key={it}
            className={`rounded-md px-3 py-1 text-sm transition-colors ${
              it === page ? "bg-primary text-white" : "border hover:bg-primary/10"
            }`}
            onClick={() => onChange(it as number)}
            disabled={disabled}
            aria-current={it === page ? "page" : undefined}
          >
            {it}
          </button>
        )
      )}

      <button className="rounded-md border px-3 py-1 text-sm disabled:opacity-50"
        onClick={() => onChange(Math.min(totalPages, page + 1))} disabled={disabled || page === totalPages}>
        Next
      </button>
    </nav>
  );
};

export default Pagination;
