"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout/container";

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.801 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.801-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.786.57-1.842-.197-1.541-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

interface HeroProps {
  badge?: {
    downloads?: string;
    rating?: number;
    avgRating?: string;
  };
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
    priority?: boolean;
  };
}

export function Hero({
  badge = {
    downloads: "20k+",
    rating: 4,
    avgRating: "4.2"
  },
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  image
}: HeroProps) {
  return (
    <Section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] min-h-[90vh]"
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 min-h-[50vh]">
          <div className="lg:col-span-6">
            {/* Social proof badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--bookie-bg)]/40 px-4 py-2 text-xs text-neutral-700 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--bookie-bg)]/30"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-medium">{badge.downloads}</span>
                <span className="opacity-80">downloads</span>
              </div>
              <span aria-hidden className="text-neutral-500">
                •
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-0.5 text-[color:var(--bookie-orange)]">
                  {[...Array(Math.floor(badge.rating || 4))].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                  {badge.rating && badge.rating % 1 !== 0 && (
                    <StarIcon className="h-4 w-4 opacity-40" />
                  )}
                </div>
                <span className="font-medium">{badge.avgRating}</span>
                <span className="opacity-80">avg rating</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="mt-4 max-w-3xl text-5xl font-semibold font-serif tracking-tight text-neutral-900"
            >
              {headline}
            </motion.h1>

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700"
            >
              {subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <Link
                href={primaryCTA.href}
                className="group inline-flex items-center justify-center rounded-full bg-[color:var(--foreground)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--foreground)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--bookie-orange)]/50"
              >
                <span>{primaryCTA.text}</span>
              </Link>

              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center rounded-full border border-black/5 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-none lg:col-span-6"
          >
            <div className="relative mx-auto max-w-[600px] overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  priority={image.priority}
                  placeholder="blur"
                  blurDataURL="/showcase-small.png"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}