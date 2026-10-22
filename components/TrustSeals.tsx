import { seals } from "@/lib/content";
import { Icon } from "@/components/Icon";

// Seal-style trust badges: shield emblem with a gradient ring.
export function TrustSeals({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={`grid gap-3 ${compact ? "grid-cols-2 sm:grid-cols-4 lg:grid-cols-8" : "grid-cols-2 gap-4 sm:grid-cols-4"}`}
      aria-label="Trust badges"
    >
      {seals.map((s) => (
        <li
          key={s.title}
          className={`flex items-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] ${compact ? "gap-3 p-2.5 pr-3" : "flex-col gap-3 px-3 py-5 text-center"}`}
        >
          <span
            className={`relative flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-brand via-blue-brand to-pink-brand p-[2px] ${compact ? "h-10 w-10" : "h-14 w-14"}`}
          >
            <span className="flex h-full w-full items-center justify-center rounded-full border border-dashed border-white/25 bg-night-900 text-white">
              <Icon name={s.icon} className={compact ? "h-4 w-4" : "h-6 w-6"} />
            </span>
          </span>
          <span className="leading-tight">
            <span className={`block font-display font-extrabold text-white uppercase ${compact ? "text-[11px]" : "text-sm"}`}>{s.title}</span>
            <span className={`block text-slate-400 ${compact ? "text-[10px]" : "text-xs"}`}>{s.sub}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
