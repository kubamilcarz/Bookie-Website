import type { TocHeading } from "@/lib/support";
import clsx from "clsx";

export function SupportTableOfContents({
  headings,
  className,
}: {
  headings: TocHeading[];
  className?: string;
}) {
  if (!headings.length) return null;

  return (
    <div className={clsx("hidden lg:block", className)}>
      <div className="sticky top-24 rounded-2xl border border-black/5 bg-white/80 px-5 py-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          On this page
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={heading.slug}>
              <a
                href={`#${heading.slug}`}
                className={clsx(
                  "text-neutral-700 hover:text-neutral-900",
                  heading.level === 3 ? "pl-3 text-xs" : "font-medium"
                )}
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
