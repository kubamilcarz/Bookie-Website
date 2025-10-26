import { 
  Hero, 
  Benefits, 
  FeatureShowcase,
  SocialProof, 
  BookiePlusSection, 
  CTASection 
} from "@/components/landing-page";
import { RelatedPages } from "@/components/internal-links";

export const metadata = {
  title: "Best Reading Tracker & Book Journal App for iOS | Bookie",
  description: "The most beautiful reading tracker and book journal app for iPhone. Track books, set reading goals, capture quotes, and build lasting reading habits. Download free on iOS.",
  keywords: [
    "reading tracker",
    "book journal app",
    "reading journal",
    "book tracker app",
    "reading log",
    "book diary",
    "reading organizer",
    "book reading tracker",
    "digital reading journal"
  ],
  openGraph: {
    title: "Best Reading Tracker & Book Journal App for iOS",
    description: "Track books, set goals, capture quotes, and build lasting reading habits with Bookie.",
    url: "https://getbookie.app/explore/reading-tracker",
    type: "website",
    images: [
      {
        url: "https://getbookie.app/transparent-showcase.png",
        alt: "Bookie reading tracker app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Reading Tracker & Book Journal App for iOS",
    description: "Track books, set goals, capture quotes, and build lasting reading habits.",
  },
};

const trackerBenefits = [
  {
    title: "Beautiful reading journal",
    desc: "Your personal library lives in a clean, elegant interface designed for readers first.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: "Track everything that matters",
    desc: "Log books, reading progress, quotes, ratings, and personal notes all in one place.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    )
  },
  {
    title: "Set meaningful goals",
    desc: "Create yearly reading goals and watch your progress grow. Stay motivated with stats that celebrate your journey.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    )
  },
  {
    title: "Capture quotes instantly",
    desc: "Scan quotes from physical books with your camera, or type them manually. Never lose a meaningful passage again.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"/>
      </svg>
    )
  },
  {
    title: "Works offline, syncs everywhere",
    desc: "Full offline support with seamless iCloud sync across all your Apple devices.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
    )
  },
  {
    title: "Privacy you can trust",
    desc: "Your reading data is yours. No tracking, no ads, no data selling. Everything stays in your iCloud.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    )
  }
];

export default function ReadingTrackerPage() {
  return (
    <main>
      <Hero
        badge={{
          downloads: "20k+",
          rating: 4.8,
          avgRating: "4.8"
        }}
        headline="The reading tracker you'll actually use"
        subheadline="Track books, set goals, and build lasting reading habits with the most beautiful book journal app for iOS. Simple, powerful, and designed for readers."
        primaryCTA={{
          text: "Download Free on App Store",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "See all features",
          href: "/features"
        }}
        image={{
          src: "/transparent-showcase.png",
          alt: "Bookie reading tracker app",
          priority: true
        }}
      />

      <Benefits
        title="Everything you need to track your reading"
        subtitle="A complete reading journal in your pocket"
      />

      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trackerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[color:var(--bookie-orange)]/10 flex items-center justify-center text-[color:var(--bookie-orange)] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureShowcase
        title="Features that readers actually use"
        subtitle="See exactly how Bookie helps you track and enjoy your reading journey."
        items={[
          {
            title: "Quick Book Logging",
            description: "Search by title, scan a barcode, or manually add—Bookie makes logging books effortless. No lengthy forms, no complicated setup.",
            image: "/features/fast-logging.png",
            features: ["Search millions of books instantly", "Barcode scanner for quick entry", "Manual entry for any book", "Import from Goodreads or CSV"]
          },
          {
            title: "Reading Goals That Inspire",
            description: "Set yearly reading goals and track your progress throughout the year. Celebrate milestones and build consistency with gentle motivation.",
            image: "/features/stats.png",
            features: ["Flexible yearly reading goals", "Beautiful progress visualization", "Reading streaks and milestones", "Detailed reading statistics"]
          },
          {
            title: "Track Your Reading Progress",
            description: "Mark books as reading, finished, or want to read. Track your progress page-by-page and see your reading history at a glance.",
            image: "/features/reading-progress.png",
            features: ["Reading status tracking", "Page progress logging", "Reading history timeline", "Detailed book statistics"]
          }
        ]}
      />

      <SocialProof />
      
      <BookiePlusSection />

      {/* Internal Linking */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <RelatedPages
            title="Discover More"
            pages={[
              {
                title: "For Book Lovers",
                description: "Join thousands of passionate readers tracking their literary journey.",
                href: "/explore/book-lovers"
              },
              {
                title: "Build Reading Habits",
                description: "Turn reading into a daily habit you love with gentle tracking.",
                href: "/explore/reading-habits"
              },
              {
                title: "Goodreads Alternative",
                description: "Privacy-first reading tracker with no ads and better features.",
                href: "/explore/goodreads-alternative"
              },
              {
                title: "See All Features",
                description: "Explore barcode scanner, statistics, shelves, and more.",
                href: "/features"
              },
              {
                title: "Read Our Blog",
                description: "Reading tips, product updates, and insights from our team.",
                href: "/blog"
              },
              {
                title: "Get Support",
                description: "Find help articles, guides, and contact our support team.",
                href: "/support"
              }
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Start tracking your reading today"
        subtitle="Join thousands of readers who've made Bookie their reading companion."
        primaryCTA={{
          text: "Download on the App Store",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "See features",
          href: "/features"
        }}
      />
    </main>
  );
}
