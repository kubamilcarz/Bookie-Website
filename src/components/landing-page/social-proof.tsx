"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout/container";

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.801 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.801-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.786.57-1.842-.197-1.541-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

interface Review {
  name: string;
  text: string;
}

interface SocialProofProps {
  title?: string;
  subtitle?: string;
  reviews?: Review[];
  showStars?: boolean;
  className?: string;
}

const defaultReviews: Review[] = [
  {
    name: "John P.",
    text: "Finally found an app that makes reading tracking feel natural, not like homework.",
  },
  {
    name: "Paul R.",
    text: "The quote scanner is brilliant. I can capture passages from physical books instantly.",
  },
  {
    name: "Alex M.",
    text: "Clean interface and smart goals keep me motivated without being pushy.",
  },
  {
    name: "David L.",
    text: "Love how it syncs across devices. My reading progress is always up to date.",
  },
  {
    name: "Max M.",
    text: "Best reading app I've used. Simple, beautiful, and actually helps me read more.",
  },
  {
    name: "Anna R.",
    text: "The gentle reminders and streak tracking work perfectly for building habits.",
  },
  {
    name: "Sophia S.",
    text: "Importing from Goodreads was seamless. Switched over in minutes.",
  },
  {
    name: "Tom M.",
    text: "No ads, no tracking, just pure focus on reading. Exactly what I wanted.",
  },
];

export function SocialProof({
  title = "Trusted by thousands of readers",
  subtitle,
  reviews = defaultReviews,
  showStars = true,
  className = ""
}: SocialProofProps) {
  return (
    <Section className={className}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {showStars && (
            <div className="mt-3 flex items-center justify-center gap-1 text-[color:var(--bookie-orange)]">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>
          )}
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl font-serif">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-neutral-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-neutral-700">&ldquo;{r.text}&rdquo;</p>
              <span className="mt-3 block text-sm font-medium text-neutral-900">
                — {r.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}