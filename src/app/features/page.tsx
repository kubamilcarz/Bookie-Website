// app/features/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/layout/container";
import { RelatedPages } from "@/components/internal-links";

type Feature = {
  title: string;
  desc: string;
  image: string;
  bullets?: string[];
  tag?: "New" | "Improved";
  soon?: boolean;
};

const regular: Feature[] = [
  {
    title: "Fast Book Logging",
    desc: "Add books by search or barcode — clean, uncluttered flow built for speed.",
    image: "/features/fast-logging.png",
    bullets: ["Barcode scanner", "ISBN search"],
  },
  {
    title: "Reading Progress",
    desc: "Update pages in seconds and watch your progress grow with gentle nudges.",
    image: "/features/reading-progress.png",
    bullets: ["Quick updates", "Daily reminders (optional)"],
  },
  {
    title: "Shelves & Organization",
    desc: "Group books into shelves and name them as you like.",
    image: "/features/shelves.png",
    bullets: ["Shelves", "Filters", "Sort by status"],
  },
  {
    title: "iCloud Sync",
    desc: "Your library, notes, and stats are private and synced via iCloud.",
    image: "/features/icloud.png",
    bullets: ["Private by design", "Works across devices"],
  },
  {
    title: "Import & Export",
    desc: "Move in from Goodreads or CSV and take your data with you anytime.",
    image: "/features/import.png",
    bullets: ["Goodreads import", "CSV in/out"],
  },
  {
    title: "Widgets",
    desc: "Log progress and glance at stats right from your Home or Lock Screen.",
    image: "/features/widgets.png",
    bullets: ["Lock Screen", "Home Screen"],
  },
];

const bookiePlus: Feature[] = [
  {
    title: "Reading Insights",
    desc: "Daily goal, estimated finish date, and friendly reminders.",
    image: "/features/stats.png",
  },
  {
    title: "Monthly Summary",
    desc: "Gentle monthly recap of your reading habits and highlights.",
    image: "/features/summary.png",
  },
  {
    title: "Quote Scanner",
    desc: "Import quotes from images to Bookie.",
    image: "/features/scanner.png",
  },
  {
    title: "Better Organization",
    desc: "Sorting, filtering, and custom shelves to keep your library tidy.",
    image: "/features/organization.png",
  },
  {
    title: "Dynamic Lists",
    desc: "Build powerful saved views (e.g., 5★ this year, short books, TBR next).",
    image: "/features/dynamic-lists.png",
    bullets: ["Stackable filters", "Save & pin lists"],
  },
  {
    title: "Themes",
    desc: "A beautiful set of themes — match your vibe while you read.",
    image: "/features/themes.png",
  },
];

function FeatureCard({ f }: { f: Feature }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[5/4] w-full overflow-hidden">
        <Image
          src={f.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          priority={false}
        />
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="text-lg font-medium text-neutral-900">
            {f.title}
          </h3>
          {f.soon ? (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] text-amber-800 border border-amber-200">
              Soon
            </span>
          ) : f.tag ? (
            <span className="rounded-full bg-[color:var(--bookie-bg)]/60 px-2 py-0.5 text-[10px] text-neutral-800">
              {f.tag}
            </span>
          ) : null}
        </div>
        <p className="text-sm text-neutral-700">{f.desc}</p>
        {f.bullets?.length ? (
          <ul className="mt-3 grid grid-cols-1 gap-1 text-sm text-neutral-700">
            {f.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 text-[color:var(--bookie-orange)]">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.293 9.293L8.586 11.586l6.543-6.543a1 1 0 011.578.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Features - Book Tracker with Barcode Scanner & Quote Capture | Bookie",
  description:
    "Explore Bookie's features: barcode scanner for quick book entry, OCR quote scanner, reading goals, statistics, custom shelves, iCloud sync, and more. Free with premium Bookie+ upgrade.",
  keywords: [
    "book scanner",
    "barcode scanner books",
    "quote scanner",
    "reading tracker features",
    "book organizer",
    "reading statistics",
    "book shelves app",
    "iCloud book sync"
  ],
  openGraph: {
    title: "Bookie Features - Book Tracker with Scanner & Stats",
    description: "Barcode scanner, quote capture, reading goals, statistics, custom shelves & more. See what makes Bookie the best book tracking app.",
    url: "https://getbookie.app/features",
    type: "website",
    images: [
      {
        url: "https://getbookie.app/features/fast-logging.png",
        alt: "Bookie features showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookie Features - Book Tracker with Scanner & Stats",
    description: "Barcode scanner, quote capture, reading goals, statistics, custom shelves & more.",
  },
};

export default function FeaturesPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight font-serif text-neutral-900">
              Features
            </h1>
            <p className="mt-2 text-neutral-700">
              A clean, joyful reading tracker — and powerful extras with Bookie+.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 text-xs">
              <Link
                href="https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--bookie-orange)] px-4 py-2 font-medium text-white shadow-sm transition hover:opacity-95"
              >
                Download
              </Link>
              <Link
                href="/blog?tag=release"
                className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
              >
                See what’s new
              </Link>
            </div>
          </div>

          <section className="mx-auto mt-10 max-w-5xl">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Included for everyone
              </h2>
              <p className="mt-1 text-sm text-neutral-600">
                Everything you need to track reading and stay motivated.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regular.map((f) => (
                <FeatureCard key={f.title} f={f} />
              ))}
            </div>
          </section>

          <section id="bookie-plus" className="mx-auto mt-12 max-w-5xl">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Bookie+
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bookiePlus.map((f) => (
                <FeatureCard key={f.title} f={f} />
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-black/10 bg-[color:var(--bookie-bg)]/10 p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900">
                Try Bookie+
              </h3>
              <p className="mt-1 text-sm text-neutral-700">
                Unlock themes, dynamic lists, advanced stats, and more.
              </p>
              <div className="mt-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--bookie-orange)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </section>

          {/* Internal Linking */}
          <RelatedPages
            title="Learn More About Bookie"
            pages={[
              {
                title: "For Book Lovers",
                description: "Join thousands of passionate readers tracking their literary journey.",
                href: "/explore/book-lovers"
              },
              {
                title: "Build Reading Habits",
                description: "Gentle tracking that helps you build consistent reading habits.",
                href: "/explore/reading-habits"
              },
              {
                title: "Goodreads Alternative",
                description: "Privacy-first reading tracker with no ads and better features.",
                href: "/explore/goodreads-alternative"
              },
              {
                title: "Read the the Blog",
                description: "Tips, updates, and insights from the Bookie team.",
                href: "/blog"
              },
              {
                title: "Product Roadmap",
                description: "See what's coming next and share your feedback.",
                href: "/roadmap"
              },
              {
                title: "Download Bookie",
                description: "Get started with Bookie on your iPhone or iPad.",
                href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
              }
            ]}
          />
        </Container>
      </Section>
    </main>
  );
}