"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout/container";

interface BookiePlusFeature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface BookiePlusSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: BookiePlusFeature[];
  image?: {
    src: string;
    alt: string;
  };
  ctaText?: string;
  ctaHref?: string;
  disclaimerText?: string;
  className?: string;
}

const defaultFeatures: BookiePlusFeature[] = [
  {
    title: "Themes",
    desc: "Match your vibe with elegant, readable themes.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm-1 4a1 1 0 112 0v6a1 1 0 01-2 0V7zm1 10a1.25 1.25 0 110-2.5A1.25 1.25 0 0112 17z" />
      </svg>
    ),
  },
  {
    title: "Reading insights",
    desc: "Trends, pace, and time-to-finish estimates.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M4 19h16v2H4zM6 5h2v12H6zm5 6h2v6h-2zm5-4h2v10h-2z" />
      </svg>
    ),
  },
  {
    title: "Shake your next read",
    desc: "Stuck? Shake to get a smart suggestion.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M7 2l10 4-4 10L3 12 7 2zm10.5 8.5l3.5 1.4-2.8 6.8-6.8 2.8-1.4-3.5 7.5-7.5z" />
      </svg>
    ),
  },
  {
    title: "Support developer",
    desc: "Keep Bookie indie and privacy‑friendly.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 21s-7-4.35-7-10a5 5 0 019-3 5 5 0 019 3c0 5.65-7 10-7 10s-2-1.25-4-3.25C10 19.75 12 21 12 21z" />
      </svg>
    ),
  },
  {
    title: "Dynamic lists",
    desc: "Auto-updating lists like 'TBR'.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M4 6h16v2H4V6zm0 5h10v2H4v-2zm0 5h16v2H4v-2z" />
      </svg>
    ),
  },
  {
    title: "Reading goals",
    desc: "Yearly targets with gentle streaks.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 5v5l4 2-.75 1.86L11 13V7z" />
      </svg>
    ),
  },
];

export function BookiePlusSection({
  title = "Pro extras for serious readers",
  subtitle = "Bookie+",
  description = "Unlock pro tools that make great reading effortless.",
  features = defaultFeatures,
  image = {
    src: "/bookie-plus-stacked.png",
    alt: "Bookie+ showcase"
  },
  ctaText = "Explore Bookie+",
  ctaHref = "/features#bookie-plus",
  disclaimerText = `Pricing may change over time. See our Privacy Policy and Terms.`,
  className = ""
}: BookiePlusSectionProps) {
  return (
    <Section className={`bg-[color:var(--bookie-orange)]/10 ${className}`}>
      <Container>
        <div className="mt-6 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* Header row (badge + kicker) */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--bookie-orange)]/10 px-3 py-1 text-xs font-medium font-serif text-[color:var(--bookie-orange)] ring-1 ring-inset ring-[color:var(--bookie-orange)]/30">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2l3 7h7l-5.5 4 2.5 7L12 16l-7 4 2.5-7L2 9h7z" />
                </svg>
                {subtitle}
              </span>
              <p className="text-xs text-neutral-600">
                {description}
              </p>
            </div>

            {/* Title spans both columns */}
            <h2 className="mt-4 text-balance text-3xl font-semibold font-serif tracking-tight text-neutral-900 sm:text-4xl">
              {title}
            </h2>

            <div className=" my-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-[color:var(--bookie-orange)]/15 p-2 text-[color:var(--bookie-orange)] ring-1 ring-inset ring-[color:var(--bookie-orange)]/20">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-700">{f.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {disclaimerText && (
              <p className="text-xs text-neutral-600">
                {disclaimerText.includes("Privacy Policy") ? (
                  <>
                    Pricing may change over time. See our{" "}
                    <Link
                      href="https://kubamilcarz.notion.site/Bookie-Privacy-Policy-ecb3ed654d3a4cf796e49aeaba6348a8?source=bookie_website"
                      target="_blank"
                      className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="https://www.apple.com/legal/internet-services/terms/site.html"
                      target="_blank"
                      className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
                    >
                      Terms
                    </Link>
                    .
                  </>
                ) : (
                  disclaimerText
                )}
              </p>
            )}

            <Link
              href={ctaHref}
              className="mt-2 group inline-flex items-center justify-center rounded-full bg-[color:var(--foreground)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--foreground)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--bookie-orange)]/50"
            >
              <span>{ctaText}</span>
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[5/7] w-full overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}