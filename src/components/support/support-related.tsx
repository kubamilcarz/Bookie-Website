import Link from "next/link";
import type { SupportArticle } from "contentlayer/generated";
import { CATEGORY_COPY } from "@/lib/support";

export function SupportRelatedArticles({
  articles,
}: {
  articles: SupportArticle[];
}) {
  if (!articles.length) return null;

  return (
    <div className="mt-16 rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-neutral-900">Related articles</h3>
      <ul className="mt-4 space-y-4">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/support/${article.slug}`}
              className="group block rounded-2xl border border-transparent px-4 py-3 transition hover:border-black/10 hover:bg-[color:var(--bookie-bg)]/40"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                {CATEGORY_COPY[article.category].title}
              </p>
              <p className="mt-1 text-base font-serif font-semibold text-neutral-900 group-hover:text-[color:var(--bookie-orange)]">
                {article.title}
              </p>
              <p className="mt-1 text-sm text-neutral-600">{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
