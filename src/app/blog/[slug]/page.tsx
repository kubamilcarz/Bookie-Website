import { BlogHeader } from "@/components/blog-header";
import { Container, Section } from "@/components/layout/container";
import { allBlogPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

// Tell Next these routes are fully static
export const dynamic = "force-static";
export const dynamicParams = false; // don't allow unknown slugs at runtime

export async function generateStaticParams() {
  // slugAsParams is the usual field from Contentlayer (e.g. "my-post")
  return allBlogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = allBlogPosts.find((p) => p.slug === params.slug);
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
    "
  />
</div>
          </article>
        </Container>
      </Section>
    </main>
  );
}
