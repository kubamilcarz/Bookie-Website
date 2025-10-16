"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout/container";
import { useEffect, useRef, useState } from "react";

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.801 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.801-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.786.57-1.842-.197-1.541-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Benefits />
      <SocialProof />
      <BookiePlusSection />
      <FAQSection />
    </main>
  );
}

function Hero() {
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
                <span className="font-medium">20k+</span>
                <span className="opacity-80">downloads</span>
              </div>
              <span aria-hidden className="text-neutral-500">
                •
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-0.5 text-[color:var(--bookie-orange)]">
                  {[...Array(4)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                  <StarIcon className="h-4 w-4 opacity-40" />
                </div>
                <span className="font-medium">4.2</span>
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
              Make reading a habit you love
            </motion.h1>

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700"
            >
              Turn reading into a daily habit you love. One page at a time.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <Link
                href="https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
                className="group inline-flex items-center justify-center rounded-full bg-[color:var(--foreground)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--foreground)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--bookie-orange)]/50"
              >
                <span>Download on the App Store</span>
              </Link>

              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-full border border-black/5 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
              >
                Discover features
              </Link>
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
                  src="/transparent-showcase.png"
                  alt="Bookie app showcase"
                  fill
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  priority
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

function Benefits() {
  const items = [
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

  const { ref, seen } = useInViewOnce<HTMLDivElement>();

  return (
    <Section className="bg-[color:var(--bookie-orange)]/10">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-3xl font-semibold tracking-tight font-serif sm:text-4xl">
            Benefits that keep you reading
          </h2>
          <p className="mt-3 text-neutral-700">
            Thoughtfully designed features that make progress feel easy — and
            enjoyable.
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
                // If you want a tiny lift, swap to "animate-fade-in-up"
                // className={seen ? "animate-fade-in-up" : ""}
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

function SocialProof() {
const reviews = [
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
        text: "Best reading app I&apos;ve used. Simple, beautiful, and actually helps me read more.",
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

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mt-3 flex items-center justify-center gap-1 text-[color:var(--bookie-orange)]">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl font-serif">
            Trusted by thousands of readers
          </h2>
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
              <p className="text-sm text-neutral-700">“{r.text}”</p>
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

function BookiePlusSection() {
  const features = [
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
      desc: "Auto-updating lists like ‘TBR’.",
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

  return (
    <Section className="bg-[color:var(--bookie-orange)]/10">
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
                Bookie+
              </span>
              <p className="text-xs text-neutral-600">
                Unlock pro tools that make great reading effortless.
              </p>
            </div>

            {/* Title spans both columns */}
            <h2 className="mt-4 text-balance text-3xl font-semibold font-serif tracking-tight text-neutral-900 sm:text-4xl">
              Pro extras for serious readers
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

            <p className="text-xs text-neutral-600">
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
            </p>

            <Link
              href="/features#bookie-plus"
              className="mt-2 group inline-flex items-center justify-center rounded-full bg-[color:var(--foreground)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--foreground)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--bookie-orange)]/50"
            >
              <span>Explore Bookie+</span>
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[5/7] w-full overflow-hidden rounded-xl">
                <Image
                  src="/bookie-plus-stacked.png"
                  alt="Bookie+ showcase"
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

function FAQSection() {
  const faqs = [
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

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight font-serif text-neutral-900 sm:text-4xl">
            Questions & answers
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            For billing, troubleshooting, or feature requests, please see our{" "}
            <a
              href="/support"
              className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
            >
              Support
            </a>{" "}
            page.
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
            href="/support"
            className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
          >
            Support
          </a>{" "}
          page.
        </div>
      </Container>
    </Section>
  );
}
