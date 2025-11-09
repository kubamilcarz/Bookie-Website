import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allSupportArticles } from "contentlayer/generated";
import { Container, Section } from "@/components/layout/container";
import { BreadcrumbSchema } from "@/components/schema";
import { SupportArticleHeader } from "@/components/support/support-article-header";
import { SupportArticleBody } from "@/components/support/support-mdx";
import { SupportTableOfContents } from "@/components/support/support-toc";
import { NeedHelpCard } from "@/components/support/need-help-card";
import { SupportRelatedArticles } from "@/components/support/support-related";
import { extractHeadings, getRelatedArticles } from "@/lib/support";

type Props = { params: { slug: string } };

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return allSupportArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = allSupportArticles.find((item) => item.slug === params.slug);
  if (!article) {
    return { title: "Support article not found" };
  }

  const url = `https://getbookie.app/support/${article.slug}`;

  return {
    title: `${article.title} | Bookie Support`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url,
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.description,
    },
  };
}

export default function SupportArticlePage({ params }: Props) {
  const article = allSupportArticles.find((item) => item.slug === params.slug);
  if (!article) return notFound();

  const headings = extractHeadings(article.body.raw);
  const related = getRelatedArticles(article, allSupportArticles, 3);
  const breadcrumbs = [
    { name: "Home", url: "https://getbookie.app" },
    { name: "Support", url: "https://getbookie.app/support" },
    { name: article.title, url: `https://getbookie.app/support/${article.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main>
        <Section>
          <Container>
            <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(14rem,1fr)] lg:gap-10">
              <article className="rounded-[32px] border border-black/5 bg-white p-6 shadow-sm sm:p-10">
                <nav className="text-sm text-neutral-500">
                  <Link
                    href="/support"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--bookie-orange)]"
                  >
                    ← Back to Support
                  </Link>
                </nav>
                <SupportArticleHeader article={article} />
                <SupportArticleBody code={article.body.code} />
                <SupportRelatedArticles articles={related} />
                <div className="mt-10 lg:hidden">
                  <NeedHelpCard />
                </div>
              </article>
              <div className="mt-10 lg:mt-0">
                <SupportTableOfContents headings={headings} />
                <div className="mt-6 hidden lg:block">
                  <NeedHelpCard />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
