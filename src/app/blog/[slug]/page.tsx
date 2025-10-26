import { BlogHeader } from "@/components/blog-header";
import { Container, Section } from "@/components/layout/container";
import { allBlogPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { ArticleSchema, BreadcrumbSchema } from "@/components/schema";
import { BlogRelatedPosts, RelatedPages } from "@/components/internal-links";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return allBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allBlogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const baseUrl = "https://getbookie.app";
  const url = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = post.cover ? `${baseUrl}${post.cover}` : `${baseUrl}/bookie-logo.png`;

  return {
    title: `${post.title} | Bookie Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Bookie Team"],
      url: url,
      images: [
        {
          url: imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [imageUrl],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = allBlogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const baseUrl = "https://getbookie.app";
  const url = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = post.cover ? `${baseUrl}${post.cover}` : undefined;

  const breadcrumbs = [
    { name: "Home", url: baseUrl },
    { name: "Blog", url: `${baseUrl}/blog` },
    { name: post.title, url: url },
  ];

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.summary}
        publishedAt={post.publishedAt}
        url={url}
        imageUrl={imageUrl}
        tags={post.tags}
      />
      <BreadcrumbSchema items={breadcrumbs} />
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

              {/* Internal Linking: Related Blog Posts */}
              <BlogRelatedPosts 
                currentSlug={post.slug} 
                allPosts={allBlogPosts}
                maxPosts={3}
              />

              {/* Internal Linking: Related Pages */}
              <RelatedPages
                title="Explore Bookie"
                pages={[
                  {
                    title: "See All Features",
                    description: "Discover barcode scanner, quote capture, reading statistics, and more.",
                    href: "/features"
                  },
                  {
                    title: "Download Bookie",
                    description: "Get started with Bookie on your iPhone or iPad today.",
                    href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
                  },
                  {
                    title: "Join Book Lovers",
                    description: "See why thousands of readers choose Bookie to track their reading.",
                    href: "/explore/book-lovers"
                  }
                ]}
              />
            </article>
          </Container>
        </Section>
      </main>
    </>
  );
}
