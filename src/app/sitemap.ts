import { allBlogPosts, allSupportArticles } from "contentlayer/generated";
import type { BlogPost, SupportArticle } from "contentlayer/generated";

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://getbookie.app';

  // Static pages
  const staticPages = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/features/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/roadmap/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/support/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/blog/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  // Explore pages (SEO landing pages)
  const explorePages = [
    { url: `${base}/explore/book-lovers/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/explore/busy-parents/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/explore/digital-detox/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/explore/goodreads-alternative/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/explore/reading-habits/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  // Blog posts (dynamic from contentlayer)
  const blogPosts = allBlogPosts
    .filter((post: BlogPost) => !post.draft) // Exclude drafts
    .map((post: BlogPost) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // Support articles (dynamic from contentlayer)
  const supportArticles = allSupportArticles.map((article: SupportArticle) => ({
    url: `${base}/support/${article.slug}`,
    lastModified: article.lastUpdated ? new Date(article.lastUpdated) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...explorePages, ...blogPosts, ...supportArticles];
}