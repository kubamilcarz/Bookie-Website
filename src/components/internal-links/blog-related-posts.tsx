import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "contentlayer/generated";

interface BlogRelatedPostsProps {
  currentSlug: string;
  allPosts: BlogPost[];
  maxPosts?: number;
}

export function BlogRelatedPosts({ 
  currentSlug, 
  allPosts, 
  maxPosts = 3 
}: BlogRelatedPostsProps) {
  // Filter out current post and drafts, then get most recent
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug && !post.draft)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-neutral-200">
      <h2 className="text-2xl font-semibold font-serif text-neutral-900 mb-6">
        More from the Blog
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="h-full p-6 rounded-xl border border-neutral-200 bg-white hover:border-[color:var(--bookie-orange)] hover:shadow-md transition-all">
              {post.cover && (
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-neutral-100 relative">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex items-center gap-2 mb-2">
                <time className="text-xs text-neutral-500">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                {post.readingTime && (
                  <>
                    <span className="text-neutral-300">•</span>
                    <span className="text-xs text-neutral-500">
                      {post.readingTime} min read
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-[color:var(--bookie-orange)] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                {post.summary}
              </p>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-neutral-100 text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
