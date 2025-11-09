"use client";

import { useState } from "react";
import type { SupportArticle, SupportPlatform } from "contentlayer/generated";
import { PLATFORM_COPY } from "@/lib/support";
import Link from "next/link";
import clsx from "clsx";

type PlatformBucket = {
  platform: SupportPlatform;
  articles: SupportArticle[];
};

export function PlatformBrowser({ buckets }: { buckets: PlatformBucket[] }) {
  const firstWithArticles =
    buckets.find((bucket) => bucket.articles.length > 0)?.platform ?? "multi";
  const [active, setActive] = useState<SupportPlatform>(firstWithArticles);

  const activeBucket =
    buckets.find((bucket) => bucket.platform === active) ?? buckets[0];

  return (
    <div className="rounded-[32px] border border-black/5 bg-white px-5 py-6 shadow-sm">
      <div className="flex flex-wrap gap-2">
        {buckets.map((bucket) => (
          <button
            key={bucket.platform}
            type="button"
            onClick={() => setActive(bucket.platform)}
            className={clsx(
              "rounded-full border px-4 py-1 text-sm font-semibold transition",
              bucket.platform === active
                ? "border-neutral-900 bg-neutral-900 text-white shadow-sm"
                : "border-neutral-200 text-neutral-700 hover:border-neutral-300"
            )}
          >
            {PLATFORM_COPY[bucket.platform].label}
            <span className="ml-1 text-xs text-neutral-400">
              {bucket.articles.length}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-black/5 bg-[color:var(--bookie-bg)]/50 px-4 py-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          {PLATFORM_COPY[active].label}
        </p>
        <p className="text-base text-neutral-700">{PLATFORM_COPY[active].description}</p>

        {activeBucket.articles.length ? (
          <ul className="mt-4 space-y-3">
            {activeBucket.articles.slice(0, 4).map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/support/${article.slug}`}
                  className="group block rounded-xl border border-transparent px-3 py-2 transition hover:border-black/10 hover:bg-white"
                >
                  <p className="text-base font-serif font-semibold text-neutral-900 group-hover:text-[color:var(--bookie-orange)]">
                    {article.title}
                  </p>
                  <p className="text-sm text-neutral-600">{article.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-neutral-600">
            Platform-specific guides coming soon. In the meantime, browse “All platforms”.
          </p>
        )}
      </div>
    </div>
  );
}
