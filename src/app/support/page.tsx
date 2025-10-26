// app/support/page.tsx
import { Container, Section } from "@/components/layout/container";
import Link from "next/link";

export const metadata = {
  title: "Support & Help Center - Get Started with Bookie",
  description: "Find help articles, FAQs, troubleshooting guides, and contact support for Bookie. Learn how to get started, import books, use features, and more.",
  keywords: [
    "bookie support",
    "book tracker help",
    "how to use bookie",
    "bookie guide",
    "contact support",
    "troubleshooting"
  ],
  openGraph: {
    title: "Bookie Support & Help Center",
    description: "Find help articles, guides, and contact support for Bookie.",
    url: "https://getbookie.app/support",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bookie Support & Help Center",
    description: "Find help articles, guides, and contact support.",
  },
};

export default function SupportPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="mx-auto max-w-lg text-center flex flex-col justify-center" style={{ minHeight: '60vh' }}>
            <div>
              <h1 className="text-4xl font-semibold font-serif tracking-tight text-neutral-900">
                Support
              </h1>
              <p className="mt-4 text-neutral-700">
                We&apos;re working on this page right now — soon you&apos;ll find guides,
                FAQs, and ways to get help here.
              </p>
              <div className="mt-8 mx-auto max-w-sm">
                <div className="rounded-2xl border border-black/10 bg-[color:var(--bookie-bg)]/10 p-6 text-center">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Need help sooner?
                  </h2>
                  <p className="mt-1 text-sm text-neutral-700">
                    Shoot us an email at{" "}
                    <a
                      href="mailto:support@kubamilcarz.com"
                      className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
                    >
                      support@kubamilcarz.com
                    </a>
                    , or check out the{" "}
                    <Link
                      href="/blog"
                      className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
                    >
                      Blog
                    </Link>{" "}
                    for updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}