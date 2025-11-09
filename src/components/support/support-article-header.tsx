import { CATEGORY_COPY, formatPlatformLabel } from "@/lib/support";
import type { SupportArticle } from "contentlayer/generated";

function formatDate(value?: string) {
  if (!value) return null;
  return new Date(value).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function SupportArticleHeader({ article }: { article: SupportArticle }) {
  const updated = formatDate(article.lastUpdated);
  const platformLabel = formatPlatformLabel(article.platform);

  return (
    <header className="mb-10">
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-600">
        <span className="rounded-full bg-[color:var(--bookie-bg)] px-3 py-1 text-neutral-800">
          {CATEGORY_COPY[article.category].title}
        </span>
        <span className="rounded-full bg-neutral-900 px-3 py-1 text-white">
          {platformLabel}
        </span>
        {article.difficulty ? (
          <span className="rounded-full border border-neutral-300 px-3 py-1 text-neutral-700">
            {article.difficulty}
          </span>
        ) : null}
        {article.videoId ? (
          <span className="rounded-full border border-[color:var(--bookie-orange)] px-3 py-1 text-[color:var(--bookie-orange)]">
            Video walkthrough
          </span>
        ) : null}
      </div>
      <h1 className="mt-6 text-4xl font-serif font-semibold leading-tight text-neutral-900">
        {article.title}
      </h1>
      <p className="mt-4 text-lg text-neutral-700">{article.description}</p>
      <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
        {updated ? (
          <div>
            <dt className="sr-only">Last updated</dt>
            <dd>Updated {updated}</dd>
          </div>
        ) : null}
        <div>
          <dt className="sr-only">Reading time</dt>
          <dd>{article.readingTime} min read</dd>
        </div>
      </dl>
    </header>
  );
}
