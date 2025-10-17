"use client";

import Link from "next/link";
import { Container, Section } from "@/components/layout/container";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  badge?: string;
  variant?: "default" | "orange" | "minimal";
  className?: string;
}

export function CTASection({
  title = "Ready to transform your reading?",
  subtitle = "Join thousands of readers who've made Bookie part of their daily routine.",
  primaryCTA = {
    text: "Download Bookie",
    href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
  },
  secondaryCTA,
  badge,
  variant = "default",
  className = ""
}: CTAProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "orange":
        return "bg-[color:var(--bookie-orange)]/10 border border-[color:var(--bookie-orange)]/20";
      case "minimal":
        return "bg-transparent";
      default:
        return "bg-[color:var(--bookie-bg)]/20 border border-black/10";
    }
  };

  return (
    <Section className={className}>
      <Container>
        <div className={`mx-auto max-w-2xl text-center rounded-2xl p-8 sm:p-12 ${getVariantClasses()}`}>
          {badge && (
            <span className="inline-flex items-center justify-center rounded-full bg-[color:var(--bookie-orange)]/10 px-3 py-1 text-xs font-medium text-[color:var(--bookie-orange)] ring-1 ring-inset ring-[color:var(--bookie-orange)]/20 mb-4">
              {badge}
            </span>
          )}
          
          <h2 className="text-3xl font-semibold tracking-tight font-serif text-neutral-900 sm:text-4xl">
            {title}
          </h2>
          
          <p className="mt-4 text-lg text-neutral-700">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--foreground)] px-8 py-4 text-base font-medium text-white transition hover:bg-[color:var(--foreground)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--bookie-orange)]/50 min-w-[180px]"
            >
              {primaryCTA.text}
            </Link>

            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center rounded-full border border-black/20 bg-white/70 px-8 py-4 text-base font-medium text-neutral-900 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 min-w-[180px]"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}