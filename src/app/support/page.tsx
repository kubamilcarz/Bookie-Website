import type { Metadata } from "next";
import Link from "next/link";
import {
  allSupportArticles,
  type SupportArticle,
} from "contentlayer/generated";
import { Container, Section } from "@/components/layout/container";
import {
  CATEGORY_COPY,
  PLATFORM_COPY,
  buildSearchDocuments,
  getFeaturedArticles,
  getTopTags,
  groupArticlesByCategory,
  sortSupportArticles,
} from "@/lib/support";
import { SupportSearch } from "./support-search";

export const metadata: Metadata = {
  title: "Support & Help Center - Bookie Guides, Tutorials & Troubleshooting",
  description:
    "Search detailed tutorials, walkthroughs, and troubleshooting guides for Bookie. Learn features, fix issues, and contact support when you need a hand.",
  openGraph: {
    title: "Bookie Support & Help Center",
    description:
      "Find help articles, onboarding guides, troubleshooting tips, and ways to contact the Bookie team.",
    url: "https://getbookie.app/support",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bookie Support & Help Center",
    description:
      "Guides and tutorials to help you get the most out of Bookie.",
  },
};

type PageProps = {
  searchParams?: {
    query?: string | string[];
  };
};

export default function SupportPage({ searchParams }: PageProps) {
  const queryParam = normalizeSearchParam(searchParams?.query);
  const articles = sortSupportArticles(allSupportArticles);
  const featured = getFeaturedArticles(articles, 4);
  const grouped = groupArticlesByCategory(articles);
  const searchDocs = buildSearchDocuments(articles);
  const tags = getTopTags(articles);
  const searchSuggestions = tags.slice(0, 3).map((tag) => tag.tag);

  return (
    <main>
      <Section className="pb-6">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Help Center
            </p>
            <h1 className="mt-3 text-4xl font-serif font-semibold text-neutral-900">
              Find answers fast
            </h1>
            <p className="mt-3 text-lg text-neutral-600">
              Search walkthroughs, browse the most-read guides, or jump into a category.
              Need a human?{" "}
              <a
                href="mailto:support@kubamilcarz.com"
                className="font-semibold text-[color:var(--bookie-orange)] underline decoration-transparent hover:decoration-[color:var(--bookie-orange)]"
              >
                Email support@kubamilcarz.com
              </a>
              .
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <SupportSearch
              documents={searchDocs}
              initialQuery={queryParam}
              suggestions={searchSuggestions}
            />
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif font-semibold text-neutral-900">
                Top articles
              </h2>
              <Link
                href="#search"
                className="text-sm font-semibold text-[color:var(--bookie-orange)]"
              >
                Search all
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {featured.map((article) => (
                <li key={article.slug}>
                  <FeaturedArticleCard article={article} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-serif font-semibold text-neutral-900">
              Browse by category
            </h2>
            <Link
              href="#search"
              className="text-sm font-semibold text-[color:var(--bookie-orange)]"
            >
              Search instead
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {(Object.keys(CATEGORY_COPY) as Array<keyof typeof CATEGORY_COPY>).map(
              (category) => (
                <CategoryCard
                  key={category}
                  category={category}
                  articles={grouped[category as keyof typeof grouped]}
                />
              )
            )}
          </div>
        </Container>
      </Section>

    </main>
  );
}

function FeaturedArticleCard({ article }: { article: SupportArticle }) {
  return (
    <Link
      href={`/support/${article.slug}`}
      className="group block rounded-2xl border border-black/5 px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-900"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
        <span>{CATEGORY_COPY[article.category].title}</span>
        <span>•</span>
        <span>{PLATFORM_COPY[article.platform].label}</span>
      </div>
      <p className="mt-2 text-xl font-serif font-semibold text-neutral-900 group-hover:text-[color:var(--bookie-orange)]">
        {article.title}
      </p>
      <p className="text-sm text-neutral-600">{article.description}</p>
      <p className="mt-2 text-xs text-neutral-500">
        {article.readingTime} min read &bull; Updated{" "}
        {article.lastUpdated
          ? new Date(article.lastUpdated).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
            })
          : "recently"}
      </p>
    </Link>
  );
}

function CategoryCard({
  category,
  articles,
}: {
  category: keyof typeof CATEGORY_COPY;
  articles: SupportArticle[];
}) {
  const meta = CATEGORY_COPY[category];
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {meta.title}
          </p>
          <p className="text-base text-neutral-700">{meta.description}</p>
        </div>
        <span className="rounded-full bg-[color:var(--bookie-bg)] px-3 py-1 text-xs font-semibold text-neutral-700">
          {articles.length} guides
        </span>
      </div>

      <ul className="mt-4 space-y-3">
        {articles.slice(0, 3).map((article) => (
          <li key={article.slug}>
            <Link
              href={`/support/${article.slug}`}
              className="group block rounded-2xl border border-transparent px-4 py-3 transition hover:border-black/10 hover:bg-[color:var(--bookie-bg)]/40"
            >
              <p className="text-base font-serif font-semibold text-neutral-900 group-hover:text-[color:var(--bookie-orange)]">
                {article.title}
              </p>
              <p className="text-sm text-neutral-600">{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      {articles.length > 3 ? (
        <Link
          href={`/support?query=${encodeURIComponent(meta.title)}#search`}
          className="mt-4 inline-flex items-center text-sm font-semibold text-[color:var(--bookie-orange)]"
        >
          View all {meta.title} articles &rarr;
        </Link>
      ) : null}
    </div>
  );
}

function normalizeSearchParam(value?: string | string[]) {
  if (!value) return "";
  return Array.isArray(value) ? value[0] : value;
}
