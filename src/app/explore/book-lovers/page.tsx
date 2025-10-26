import { 
  Hero, 
  Benefits, 
  FeatureShowcase,
  SocialProof, 
  BookiePlusSection, 
  FAQSection 
} from "@/components/landing-page";

export const metadata = {
  title: "The Perfect Reading Tracker for Book Lovers | Bookie",
  description: "Join thousands of passionate readers who use Bookie to track their reading journey, discover new books, and build lasting reading habits. Track quotes, set goals, and celebrate your literary journey.",
  keywords: [
    "book lovers app",
    "reading tracker for avid readers",
    "book journal",
    "literary journal",
    "reading community",
    "book collector app",
    "reading goals for book lovers"
  ],
  openGraph: {
    title: "The Perfect Reading Tracker for Book Lovers",
    description: "Join thousands of passionate readers tracking their literary journey with Bookie.",
    url: "https://getbookie.app/explore/book-lovers",
    type: "website",
    images: [
      {
        url: "https://getbookie.app/transparent-showcase.png",
        alt: "Bookie for book lovers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Perfect Reading Tracker for Book Lovers",
    description: "Join thousands of passionate readers tracking their literary journey.",
  },
};

export default function BookLoversLandingPage() {
  return (
    <main>
      <Hero
        badge={{
          downloads: "20k+",
          rating: 4.2,
          avgRating: "4.2"
        }}
        headline="The perfect reading companion for book lovers"
        subheadline="Join thousands of passionate readers who use Bookie to track their literary journey, capture meaningful quotes, and discover their next great read."
        primaryCTA={{
          text: "Start Your Reading Journey",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "See all features",
          href: "/features"
        }}
        image={{
          src: "/transparent-showcase.png",
          alt: "Bookie - The perfect reading tracker for book lovers",
          priority: true
        }}
      />
      
      <Benefits
        title="Everything a book lover needs"
        subtitle="Features designed by readers, for readers. Track your progress, organize your library, and never forget a great quote."
      />

      <FeatureShowcase
        title="Features that book lovers actually use"
        subtitle="See exactly how Bookie helps passionate readers organize and enjoy their reading journey."
        items={[
          {
            title: "Quick Book Logging",
            description: "Add books to your library in seconds. Search by title, scan barcodes, or enter manually - whatever works for your reading style.",
            image: "/features/fast-logging.png",
            features: ["ISBN barcode scanner", "Smart book search", "Manual entry option", "Import from other apps"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M7 4h10a2 2 0 012 2v12a1 1 0 01-1.447.894L12 16.118l-5.553 2.776A1 1 0 015 18V6a2 2 0 012-2z"/>
              </svg>
            )
          },
          {
            title: "Visual Progress Tracking",
            description: "Watch your reading journey unfold with beautiful progress indicators that actually motivate you to keep reading.",
            image: "/features/reading-progress.png",
            features: ["Page-by-page tracking", "Reading time logs", "Progress streaks", "Monthly reading goals"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M4 19h16v2H4zM6 5h2v12H6zm5 6h2v6h-2zm5-4h2v10h-2z"/>
              </svg>
            )
          },
          {
            title: "Quote Scanner",
            description: "Never lose a beautiful passage again. Scan quotes directly from physical books and organize them by book, author, or theme.",
            image: "/features/scanner.png",
            features: ["Camera text scanning", "Quote organization", "Search by author/book", "Easy sharing options"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M7.5 5h9c.8 0 1.5.7 1.5 1.5S17.3 8 16.5 8h-9C6.7 8 6 7.3 6 6.5S6.7 5 7.5 5zm0 6h9c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5S6.7 11 7.5 11z"/>
              </svg>
            )
          }
        ]}
        layout="stack"
      />
      
      <SocialProof
        title="Loved by passionate readers worldwide"
        subtitle="See what fellow book lovers are saying about their reading journey with Bookie."
      />
      
      <BookiePlusSection
        title="Pro features for serious book lovers"
        description="Unlock advanced tools for the ultimate reading experience."
      />
      
      <FAQSection
        title="Questions from fellow readers"
        subtitle="Everything you need to know about joining the Bookie community."
      />
    </main>
  );
}