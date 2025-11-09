"use client";

import { useEffect, useMemo, useState } from "react";
import Fuse, { type FuseResult } from "fuse.js";
import type { SupportSearchDocument } from "@/lib/support";
import Link from "next/link";
import { CATEGORY_COPY, PLATFORM_COPY } from "@/lib/support";

const fuseOptions: Fuse.IFuseOptions<SupportSearchDocument> = {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.3 },
    { name: "tags", weight: 0.2 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
};

export function SupportSearch({
  documents,
  initialQuery = "",
  suggestions = [],
}: {
  documents: SupportSearchDocument[];
  initialQuery?: string;
  suggestions?: string[];
}) {
  const [query, setQuery] = useState(initialQuery);
  const fuse = useMemo(() => new Fuse(documents, fuseOptions), [documents]);
  const results = useMemo<FuseResult<SupportSearchDocument>[]>(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 6);
  }, [query, fuse]);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <div id="search" className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
      <label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500">
        Search help center
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-black/10 bg-[color:var(--bookie-bg)]/40 px-4 py-3">
          <svg
            aria-hidden="true"
            className="h-4 w-4 text-neutral-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        </svg>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “quote scanner” or “sync issues”"
            className="w-full border-none bg-transparent text-base text-neutral-900 outline-none placeholder:text-neutral-500"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-900"
            >
              Clear
            </button>
          ) : null}
        </div>
        {suggestions.length ? (
          <div className="flex flex-wrap gap-2">
            {suggestions.slice(0, 3).map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-700 hover:border-neutral-400"
              >
                {term}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-4">
        {query && results.length === 0 ? (
          <p className="text-sm text-neutral-600">
            No articles found for “{query}”. Try a different phrase or browse by category below.
          </p>
        ) : null}

        {results.length ? (
          <ul className="space-y-3">
            {results.map(({ item }) => (
              <li key={item.slug}>
                <Link
                  href={`/support/${item.slug}`}
                  className="block rounded-xl border border-black/5 px-4 py-3 transition hover:border-neutral-900/30 hover:bg-[color:var(--bookie-bg)]/30"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    <span>{CATEGORY_COPY[item.category].title}</span>
                    <span>•</span>
                    <span>{PLATFORM_COPY[item.platform].label}</span>
                  </div>
                  <p className="mt-1 text-base font-serif font-semibold text-neutral-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : !query ? (
          <p className="text-sm text-neutral-600">
            Start typing to surface featured guides, or jump into a category below.
          </p>
        ) : null}
      </div>
    </div>
  );
}
