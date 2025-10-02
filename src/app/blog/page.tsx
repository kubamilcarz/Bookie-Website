import Link from "next/link";
import Image from "next/image";
import { allBlogPosts } from "contentlayer/generated";
import { Container, Section } from "@/components/layout/container";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function readingTimeFor(post: { readingTime?: number; body?: { raw?: string } }) {
  if (typeof post.readingTime === "number") return post.readingTime;
  const text = (post.body?.raw as string) || "";
  const words = text.trim().split(/\s+/g).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const title = tag ? `Bookie Blog · ${tag}` : "Bookie Blog";
  const description = tag
    ? `Posts tagged “${tag}” — product updates, tips, and reading rituals from the Bookie team.`
    : "Product updates, tips, and reading rituals from the Bookie team.";
  return { title, description };
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string | string[] }>;
}) {
  const { tag } = await searchParams;
  const activeTag = Array.isArray(tag) ? tag[0] : tag;

  const posts = allBlogPosts
    .filter((p) => !p.draft)
    .filter((p) =>
      activeTag
        ? (p.tags ?? []).some(
            (t) => t.toLowerCase() === activeTag.toLowerCase()
          )
        : true
    )
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  return (
    <main>
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight font-serif text-neutral-900">
              Bookie Blog
            </h1>
            <p className="mt-2 text-neutral-700">
              Product updates, how‑tos, and ideas to make reading a habit you love.
            </p>

            {activeTag ? (
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="rounded-full bg-[color:var(--bookie-bg)]/60 px-3 py-1 text-xs font-medium text-neutral-800">
                  Tag: {activeTag}
                </span>
                <Link
                  href="/blog"
                  className="text-xs underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
                >
                  Clear filter
                </Link>
              </div>
            ) : null}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  {post.cover ? (
                    <Image
                      src={post.cover}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center bg-[color:var(--bookie-bg)]/30">
                      <span className="text-xs text-neutral-500">No cover</span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-neutral-600">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span>•</span>
                    <span>{readingTimeFor(post)} min read</span>
                  </div>

                  <h2 className="line-clamp-2 text-lg font-serif font-semibold leading-snug text-neutral-900">
                    {post.title}
                  </h2>

                  {post.summary ? (
                    <p className="mt-1 line-clamp-3 text-md text-neutral-700">
                      {post.summary}
                    </p>
                  ) : null}

                  {post.tags?.length ? (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((t: string) => (
                        <li
                          key={t}
                          className="rounded-full bg-[color:var(--bookie-bg)]/60 px-2 py-0.5 text-xs"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="mx-auto mt-16 max-w-3xl text-center text-sm text-neutral-600">
              No posts found{activeTag ? ` for “${activeTag}”` : ""}.{" "}
              <Link
                href="/blog"
                className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
              >
                View all
              </Link>
              .
            </div>
          ) : null}
        </Container>
      </Section>
    </main>
  );
}
