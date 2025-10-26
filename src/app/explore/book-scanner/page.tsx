import { 
  Hero, 
  Benefits, 
  FeatureShowcase,
  CTASection 
} from "@/components/landing-page";
import { RelatedPages } from "@/components/internal-links";

export const metadata = {
  title: "Book Scanner App - Barcode Scanner for Book Tracking | Bookie",
  description: "Scan book barcodes with your iPhone to instantly add books to your library. The fastest book scanner app with barcode recognition, ISBN lookup, and automatic book details.",
  keywords: [
    "book scanner app",
    "barcode scanner books",
    "ISBN scanner",
    "book barcode reader",
    "scan books iPhone",
    "book scanning app",
    "barcode book tracker",
    "book inventory scanner",
    "library scanner app"
  ],
  openGraph: {
    title: "Book Scanner App - Barcode Scanner for Book Tracking",
    description: "Scan book barcodes instantly to add books to your reading tracker. Fast, accurate, and free.",
    url: "https://getbookie.app/explore/book-scanner",
    type: "website",
    images: [
      {
        url: "https://getbookie.app/features/scanner.png",
        alt: "Bookie book scanner app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Scanner App - Barcode Scanner for Book Tracking",
    description: "Scan book barcodes instantly to add books to your reading tracker.",
  },
};

const scannerBenefits = [
  {
    title: "Lightning-fast scanning",
    desc: "Point your camera at any book barcode and Bookie instantly recognizes it. Add books in seconds, not minutes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    )
  },
  {
    title: "Automatic book details",
    desc: "Cover image, title, author, page count, publication date—everything populates automatically when you scan.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: "Works with any ISBN",
    desc: "Scan ISBN-10, ISBN-13, or EAN barcodes. Bookie recognizes all standard book barcode formats.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4 6h2v12H4zm3 0h1v12H7zm2 0h3v12H9zm4 0h1v12h-1zm2 0h3v12h-3zm4 0h2v12h-2z"/>
      </svg>
    )
  },
  {
    title: "Scan your entire library",
    desc: "Building a digital catalog? Scan book after book without breaks. Perfect for organizing your home library.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
      </svg>
    )
  },
  {
    title: "No internet required",
    desc: "Scan books anywhere—the library, a bookstore, at home. Bookie works perfectly offline and syncs later.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  {
    title: "Manual entry backup",
    desc: "Can't find a barcode? No problem. Search by title or add books manually—you're never stuck.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
    )
  }
];

export default function BookScannerPage() {
  return (
    <main>
      <Hero
        badge={{
          downloads: "20k+",
          rating: 4.8,
          avgRating: "4.8"
        }}
        headline="Scan any book in seconds"
        subheadline="The fastest book scanner app for iPhone. Point your camera at any barcode and instantly add books to your library with full details."
        primaryCTA={{
          text: "Download Free on App Store",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "See how it works",
          href: "/features"
        }}
        image={{
          src: "/features/scanner.png",
          alt: "Bookie book scanner app",
          priority: true
        }}
      />

      <Benefits
        title="Why readers love our barcode scanner"
        subtitle="The most accurate book scanner on iOS"
      />

      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {scannerBenefits.map((benefit, index) => (
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
        title="Features that book scanners love"
        subtitle="See how Bookie makes organizing your library effortless."
        items={[
          {
            title: "Instant Barcode Scanning",
            description: "Open Bookie, tap the scan button, point your camera at the book's barcode. The book is added to your library with all details automatically filled in.",
            image: "/features/scanner.png",
            features: ["Instant barcode recognition", "Auto-populates all book details", "Works with ISBN-10 and ISBN-13", "Scan multiple books in a row"]
          },
          {
            title: "Organize Your Library",
            description: "Scanning is just the beginning. Create custom shelves, organize by genre or status, and find any book instantly with powerful search.",
            image: "/features/shelves.png",
            features: ["Custom book shelves", "Smart organization", "Advanced search", "Beautiful library view"]
          },
          {
            title: "Track Your Reading",
            description: "Mark books as reading, finished, or to-read. Track your progress, set goals, and see beautiful statistics about your reading journey.",
            image: "/features/stats.png",
            features: ["Reading progress tracking", "Reading goals", "Beautiful statistics", "Reading history"]
          }
        ]}
      />

      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold font-serif text-neutral-900">
              Perfect for every book lover
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Whether you&apos;re organizing your home library or tracking your reading journey
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Build your digital library
              </h3>
              <p className="text-sm text-neutral-600">
                Scan every book on your shelf to create a complete digital catalog. Perfect for knowing what you own.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Track your reading
              </h3>
              <p className="text-sm text-neutral-600">
                Quickly add books you&apos;re reading or want to read. Set goals and watch your reading life flourish.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="text-3xl mb-3">🏪</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Scan at bookstores
              </h3>
              <p className="text-sm text-neutral-600">
                Found an interesting book? Scan it to remember for later. Build your wishlist on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <RelatedPages
            title="Explore More Features"
            pages={[
              {
                title: "Quote Scanner",
                description: "Scan quotes from physical books with your camera using OCR technology.",
                href: "/features#quote-scanner"
              },
              {
                title: "Reading Tracker",
                description: "Complete reading journal with goals, statistics, and progress tracking.",
                href: "/explore/reading-tracker"
              },
              {
                title: "Build Reading Habits",
                description: "Turn reading into a daily habit with gentle tracking and motivation.",
                href: "/explore/reading-habits"
              },
              {
                title: "All Features",
                description: "Discover everything Bookie can do for your reading life.",
                href: "/features"
              },
              {
                title: "Get Support",
                description: "Learn how to use the scanner and other features effectively.",
                href: "/support"
              },
              {
                title: "Read the Blog",
                description: "Tips for organizing your library and tracking your reading.",
                href: "/blog"
              }
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Ready to scan your first book?"
        subtitle="Download Bookie free and start building your digital library in seconds."
        primaryCTA={{
          text: "Download on the App Store",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "See all features",
          href: "/features"
        }}
      />
    </main>
  );
}
