"use client";

import { Container, Section } from "@/components/layout/container";
import { useEffect, useRef, useState } from "react";

function useInViewOnce<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, ...opts }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen, opts]);

  return { ref, seen };
}

interface BenefitItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface BenefitsProps {
  title?: string;
  subtitle?: string;
  items?: BenefitItem[];
  className?: string;
}

const defaultItems: BenefitItem[] = [
  {
    title: "Log books in seconds",
    desc: "Add books with search or barcode — no clutter, no fuss.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M7 4h10a2 2 0 012 2v12a1 1 0 01-1.447.894L12 16.118l-5.553 2.776A1 1 0 015 18V6a2 2 0 012-2z"
        />
      </svg>
    ),
  },
  {
    title: "Quote scanner",
    desc: "Capture highlights with the camera and keep them beautifully organized.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M4 7a3 3 0 013-3h2v2H7a1 1 0 00-1 1v2H4V7zm16 10a3 3 0 01-3 3h-2v-2h2a1 1 0 001-1v-2h2v2zM7 20a3 3 0 01-3-3v-2h2v2a1 1 0 001 1h2v2H7zm10-16a3 3 0 013 3v2h-2V7a1 1 0 00-1-1h-2V4h2z"
        />
      </svg>
    ),
  },
  {
    title: "Goals & gentle streaks",
    desc: "Stay consistent with achievable targets and encouraging nudges.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 5h-2v5l4.243 2.536 1-1.732L13 11.268z"
        />
      </svg>
    ),
  },
  {
    title: "iCloud sync + widgets",
    desc: "Your progress, everywhere — private sync across iPhone and iPad.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M16 10a4 4 0 10-7.446 2H8a3 3 0 100 6h8a4 4 0 100-8z"
        />
      </svg>
    ),
  },
  {
    title: "Import from Goodreads/CSV",
    desc: "Bring your history in with one tap — no manual re‑typing.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M5 4h14v2H5zM5 11h14v2H5zM5 18h14v2H5z"
        />
      </svg>
    ),
  },
  {
    title: "Privacy‑first design",
    desc: "No trackers, no ads, your data stays yours.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z"
        />
      </svg>
    ),
  },
];

export function Benefits({
  title = "Benefits that keep you reading",
  subtitle = "Thoughtfully designed features that make progress feel easy — and enjoyable.",
  items = defaultItems,
  className = ""
}: BenefitsProps) {
  const { ref, seen } = useInViewOnce<HTMLDivElement>();

  return (
    <Section className={`bg-[color:var(--bookie-orange)]/10 ${className}`}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-3xl font-semibold tracking-tight font-serif sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-neutral-700">
            {subtitle}
          </p>
        </div>

        <div
          ref={ref}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          style={{ contain: "paint" }}
        >
          {items.map((b, i) => (
            <div
              key={`${b.title}-${i}`}
              className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md"
              style={{
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              {/* Animate only the inner content, not the shadowed shell */}
              <div
                className={seen ? "animate-fade-in" : ""}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="inline-flex items-center justify-center rounded-xl bg-[color:var(--bookie-orange)]/10 p-2 text-[color:var(--bookie-orange)]">
                  {b.icon}
                </div>
                <h3 className="mt-3 text-lg font-medium text-neutral-900">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-700">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}