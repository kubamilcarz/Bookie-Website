import { allBlogPosts } from "contentlayer/generated";
import { Container, Section } from "@/components/layout/container";
import BlogIndexClient from "./blog-index-client";

export const dynamic = "force-static"; 
export const revalidate = false; 

export const metadata = {
  title: "Blog - Reading Tips, Product Updates & Book Tracker Guides | Bookie",
  description:
    "Product updates, reading tips, book tracking guides, and insights from the Bookie team. Learn how to build better reading habits and get more from your books.",
  keywords: [
    "reading tips",
    "book tracker guide",
    "reading habits",
    "product updates",
    "book tracking blog",
    "reading motivation"
  ],
  openGraph: {
    title: "Bookie Blog - Reading Tips & Product Updates",
    description: "Product updates, reading tips, and guides to help you build better reading habits.",
    url: "https://getbookie.app/blog",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bookie Blog - Reading Tips & Product Updates",
    description: "Product updates, reading tips, and guides to help you build better reading habits.",
  },
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