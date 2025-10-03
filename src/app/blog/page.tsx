import { allBlogPosts } from "contentlayer/generated";
import { Container, Section } from "@/components/layout/container";
import BlogIndexClient from "./blog-index-client";

export const dynamic = "force-static"; 
export const revalidate = false; 

export const metadata = {
  title: "Bookie Blog",
  description:
    "Product updates, tips, and reading rituals from the Bookie team.",
};

export default function BlogIndexPage() {
  const posts = allBlogPosts
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  return (
    <main>
      <Section>
        <Container>
          <BlogIndexClient posts={posts} />
        </Container>
      </Section>
    </main>
  );
}