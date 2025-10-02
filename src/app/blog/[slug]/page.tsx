import { BlogHeader } from "@/components/blog-header";
import { Container, Section } from "@/components/layout/container";
import { allBlogPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug && !p.draft);
  if (!post) return notFound();

  return (
    <main>
      <Section>
        <Container>
          <article className="mx-auto max-w-2xl">
            <BlogHeader
              title={post.title}
              summary={post.summary}
              publishedAt={post.publishedAt}
              cover={post.cover}
              tags={post.tags}
              readingTime={post.readingTime}
            />
            <div className="mx-auto max-w-[68ch] leading-8">
  <div
    dangerouslySetInnerHTML={{ __html: post.body.html }}
    className="
      [&>p]:mt-8
      [&>p]:text-base
      [&>p]:text-neutral-700
      [&>p]:leading-relaxed
      [&>p]:text-left

      [&>h1]:mt-12 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:text-neutral-900
      [&>h2]:mt-10 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-neutral-900
      [&>h3]:mt-8 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-neutral-900
      [&>h4]:mt-6 [&>h4]:text-base [&>h4]:font-bold [&>h4]:text-neutral-900

      dark:[&>p]:text-neutral-300
      dark:[&>h1]:text-neutral-50
      dark:[&>h2]:text-neutral-50
      dark:[&>h3]:text-neutral-50
      dark:[&>h4]:text-neutral-50
    "
  />
</div>
          </article>
        </Container>
      </Section>
    </main>
  );
}
