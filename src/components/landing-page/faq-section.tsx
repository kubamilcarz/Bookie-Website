"use client";

import { Container, Section } from "@/components/layout/container";
import { FAQSchema } from "@/components/schema";

function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.146l3.71-3.915a.75.75 0 011.08 1.04l-4.24 4.47a.75.75 0 01-1.08 0l-4.24-4.47a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  faqs?: FAQ[];
  supportLinkText?: string;
  supportLinkHref?: string;
  className?: string;
}

const defaultFAQs: FAQ[] = [
  {
    q: "What is Bookie?",
    a: "Bookie is a beautifully simple reading tracker that helps you log books, set goals, scan quotes, and stay motivated—without feeling like a chore.",
  },
  {
    q: "Is Bookie free?",
    a: "Yes. The core features are free. Bookie+ unlocks extras like themes, deeper insights, dynamic lists, and more.",
  },
  {
    q: "Does Bookie sync across devices?",
    a: "Yes. Bookie uses iCloud sync so your library, quotes, and progress stay up to date across your Apple devices.",
  },
  {
    q: "Can I import from Goodreads or a CSV?",
    a: "You can import your reading history from Goodreads or a CSV file so switching is painless.",
  },
  {
    q: "Do you have widgets support?",
    a: "Absolutely—Home Screen and Lock Screen widgets make it quick to log progress and check stats.",
  },
  {
    q: "What data does Bookie collect?",
    a: "We focus on privacy. Bookie stores your data in iCloud under your account. See our Privacy Policy for details.",
  },
  {
    q: "How do I get help or contact support?",
    a: "Visit the Support page for guides and contact options. We usually reply quickly and love hearing from readers.",
  },
];

export function FAQSection({
  title = "Questions & answers",
  subtitle = "For billing, troubleshooting, or feature requests, please see our Support page.",
  badge = "FAQ",
  faqs = defaultFAQs,
  supportLinkText = "Support",
  supportLinkHref = "/support",
  className = ""
}: FAQSectionProps) {
  // Convert FAQs to schema format
  const faqSchemaItems = faqs.map(faq => ({
    question: faq.q,
    answer: faq.a
  }));

  return (
    <>
      <FAQSchema items={faqSchemaItems} />
      <Section className={className}>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
              {badge}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight font-serif text-neutral-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              {subtitle.includes("Support") ? (
                <>
                  For billing, troubleshooting, or feature requests, please see our{" "}
                  <a
                    href={supportLinkHref}
                    className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
                  >
                    {supportLinkText}
                  </a>{" "}
                  page.
                </>
              ) : (
                subtitle
              )}
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/70 backdrop-blur">
            {faqs.map((item, idx) => (
              <details
                key={idx}
                className="group open:bg-white/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-neutral-900 outline-none transition hover:bg-black/5">
                  <span>{item.q}</span>
                  <ChevronIcon className="h-5 w-5 shrink-0 text-neutral-500 transition group-open:rotate-180" />
                </summary>
                <div className="px-5 py-2 text-sm text-neutral-700">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-2xl text-center text-sm text-neutral-600">
            Still need help? Head to our{" "}
            <a
              href={supportLinkHref}
              className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
            >
              {supportLinkText}
            </a>{" "}
            page.
          </div>
        </Container>
      </Section>
    </>
  );
}