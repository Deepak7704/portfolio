import type { ExperienceItem } from "@/data/experience";

type Props = {
  item: ExperienceItem;
};

export function ExperienceCard({ item }: Props) {
  return (
    <article className="flex flex-col gap-3 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
            {item.role}
          </h3>
          <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
            {item.company} · {item.location}
          </p>
        </div>
        <span className="shrink-0 text-xs font-semibold text-gray-900 sm:text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
          {item.start} — {item.end}
        </span>
      </div>

      {item.summary && (
        <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
          {item.summary}
        </p>
      )}

      {item.highlights.length > 0 && (
        <ul className="space-y-1.5 border-t border-dashed border-gray-200 pt-3">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
              <span className="mt-[7px] size-1 shrink-0 rounded-full bg-gray-400" aria-hidden />
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
