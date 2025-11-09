import Slugger from "github-slugger";
import type { SupportArticle } from "contentlayer/generated";

export type SupportCategory = SupportArticle["category"];
export type SupportPlatform = SupportArticle["platform"];

export const CATEGORY_COPY: Record<
  SupportCategory,
  { title: string; description: string }
> = {
  "getting-started": {
    title: "Getting Started",
    description: "Install the app, import books, and learn the basics.",
  },
  features: {
    title: "Features",
    description: "Deep dives on quote capture, stats, goals, and more.",
  },
  troubleshooting: {
    title: "Troubleshooting",
    description: "Fix crashes, sync hiccups, and subscription issues.",
  },
  billing: {
    title: "Billing & Account",
    description: "Manage Bookie+ plans, receipts, and payment questions.",
  },
  "bookie-plus": {
    title: "Bookie+",
    description: "Unlock premium features and learn how to get the most out of them.",
  },
  account: {
    title: "Account",
    description: "Profile, privacy, and notification controls.",
  },
  community: {
    title: "Community",
    description: "Share progress, participate in clubs, and join launches.",
  },
};

export const PLATFORM_COPY: Record<
  SupportPlatform,
  { label: string; description: string }
> = {
  ios: {
    label: "iPhone",
    description: "Guides specific to Bookie on iPhone.",
  },
  ipad: {
    label: "iPad",
    description: "Split-view, Pencil, and tablet workflows.",
  },
  mac: {
    label: "Mac",
    description: "Desktop shortcuts, keyboard support, and widgets.",
  },
  web: {
    label: "Web",
    description: "Tips for readers using Bookie on the browser beta.",
  },
  multi: {
    label: "All platforms",
    description: "Applies everywhere Bookie runs.",
  },
};

export type SupportSearchDocument = {
  slug: string;
  title: string;
  description: string;
  category: SupportCategory;
  platform: SupportPlatform;
  tags: string[];
};

export type TocHeading = {
  title: string;
  slug: string;
  level: 2 | 3;
};

export type TagStat = {
  tag: string;
  count: number;
};

export function sortSupportArticles(articles: SupportArticle[]) {
  return [...articles].sort((a, b) => {
    if (a.order !== b.order) return (a.order ?? 999) - (b.order ?? 999);

    const aUpdated = a.lastUpdated ? +new Date(a.lastUpdated) : 0;
    const bUpdated = b.lastUpdated ? +new Date(b.lastUpdated) : 0;
    return bUpdated - aUpdated;
  });
}

export function groupArticlesByCategory(articles: SupportArticle[]) {
  const grouped: Record<SupportCategory, SupportArticle[]> = {
    "getting-started": [],
    features: [],
    troubleshooting: [],
    billing: [],
    "bookie-plus": [],
    account: [],
    community: [],
  };

  sortSupportArticles(articles).forEach((article) => {
    grouped[article.category].push(article);
  });

  return grouped;
}

export function getFeaturedArticles(
  articles: SupportArticle[],
  limit = 4
): SupportArticle[] {
  const featured = articles.filter((a) => a.isFeatured);
  if (featured.length >= limit) return featured.slice(0, limit);

  const remainder = sortSupportArticles(articles).filter(
    (article) => !featured.includes(article)
  );
  return [...featured, ...remainder].slice(0, limit);
}

export function getArticlesForPlatform(
  articles: SupportArticle[],
  platform: SupportPlatform
) {
  return sortSupportArticles(
    articles.filter(
      (article) => article.platform === platform || article.platform === "multi"
    )
  );
}

export function getTopTags(articles: SupportArticle[], limit = 12): TagStat[] {
  const counts: Record<string, number> = {};
  articles.forEach((article) => {
    (article.tags ?? []).forEach((tag) => {
      counts[tag] = (counts[tag] ?? 0) + 1;
    });
  });

  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function buildSearchDocuments(
  articles: SupportArticle[]
): SupportSearchDocument[] {
  return articles.map((article) => ({
    slug: article.slug,
    title: article.title,
    description: article.description,
    category: article.category,
    platform: article.platform,
    tags: article.tags ?? [],
  }));
}

export function getRelatedArticles(
  article: SupportArticle,
  allArticles: SupportArticle[],
  limit = 3
) {
  const pool = allArticles.filter((a) => a.slug !== article.slug);
  const related = pool
    .map((candidate) => {
      let score = 0;
      if (candidate.category === article.category) score += 2;
      if (candidate.platform === article.platform) score += 1;

      const sharedTags = intersection(article.tags ?? [], candidate.tags ?? []);
      score += sharedTags.length;

      return { candidate, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ candidate }) => candidate);

  if (related.length >= limit) return related.slice(0, limit);

  const remainder = pool
    .filter((item) => !related.includes(item))
    .slice(0, limit - related.length);

  return [...related, ...remainder].slice(0, limit);
}

export function extractHeadings(raw: string): TocHeading[] {
  const slugger = new Slugger();
  const headings: TocHeading[] = [];
  const regex = /^(##|###)\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(raw)) !== null) {
    const level = match[1] === "##" ? 2 : 3;
    const title = match[2].trim();
    const slug = slugger.slug(title);
    headings.push({ title, slug, level: level as 2 | 3 });
  }

  return headings;
}

export function formatPlatformLabel(platform: SupportPlatform) {
  return PLATFORM_COPY[platform].label;
}

function intersection(a: string[], b: string[]) {
  const setB = new Set(b);
  return a.filter((value) => setB.has(value));
}
