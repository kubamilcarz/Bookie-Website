import Image from "next/image";
import Link from "next/link";

export function BlogHeader({
  title,
  summary,
  publishedAt,
  cover,
  tags,
  readingTime,
}: {
  title: string;
  summary?: string;
  publishedAt: string;
  cover?: string;
  tags?: string[];
  readingTime?: number;
}) {
  return (
    <header className="mb-10">
      {/* Meta line */}
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-neutral-600">
        <time dateTime={publishedAt}>
          {new Date(publishedAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </time>
        {readingTime ? (
          <>
            <span>•</span>
            <span>{readingTime} min read</span>
          </>
        ) : null}
        {tags?.length ? (
          <>
            <span>•</span>
            <ul className="flex flex-wrap gap-1">
              {tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-[color:var(--bookie-bg)]/60 px-2 py-0.5 text-[11px]"
                >
                  <Link href={`/blog?tag=${encodeURIComponent(t)}`}>
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      {/* Title + summary */}
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 font-serif">
        {title}
      </h1>
      {summary ? (
        <p className="mt-2 text-neutral-700">{summary}</p>
      ) : null}

      {/* Cover image */}
      {cover ? (
        <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
          <Image
            src={cover}
            alt=""
            width={1200}
            height={630}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      ) : null}
    </header>
  );
}