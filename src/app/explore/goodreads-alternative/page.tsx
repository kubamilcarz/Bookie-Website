import { 
  Hero, 
  Benefits, 
  FeatureShowcase,
  SocialProof, 
  BookiePlusSection, 
  FAQSection 
} from "@/components/landing-page";

export const metadata = {
  title: "Better Than Goodreads - Privacy-First Reading Tracker | Bookie",
  description: "Switch from Goodreads to Bookie - a privacy-focused reading tracker with better features, no ads, and seamless import from your Goodreads library. Your data stays private in iCloud.",
  keywords: [
    "goodreads alternative",
    "better than goodreads",
    "privacy reading tracker",
    "goodreads import",
    "private book tracker",
    "no ads reading app",
    "goodreads replacement"
  ],
  openGraph: {
    title: "Better Than Goodreads - Privacy-First Book Tracker",
    description: "Privacy-focused reading tracker with no ads, better features, and seamless Goodreads import.",
    url: "https://getbookie.app/explore/goodreads-alternative",
    type: "website",
    images: [
      {
        url: "https://getbookie.app/transparent-showcase.png",
        alt: "Bookie - Goodreads alternative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Than Goodreads - Privacy-First Book Tracker",
    description: "Privacy-focused with no ads, better features, and seamless Goodreads import.",
  },
};

const goodreadsBenefits = [
  {
    title: "Privacy-first design",
    desc: "No tracking, no ads, no data selling. Your reading data stays private in your iCloud.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z"
        />
      </svg>
    ),
  },
  {
    title: "Seamless Goodreads import",
    desc: "Import your entire Goodreads library in seconds. No manual re-entry required.",
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
    title: "Clean, ad-free interface",
    desc: "Focus on what matters - your books. No distracting ads or promotional content.",
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
    title: "Smart quote scanning",
    desc: "Capture quotes from physical books instantly with your camera - something Goodreads can't do.",
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
    title: "Better progress tracking",
    desc: "Detailed reading progress with gentle reminders that actually motivate you to read more.",
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
    title: "Mobile-first experience",
    desc: "Designed for iPhone and iPad with widgets, offline access, and lightning-fast performance.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M16 10a4 4 0 10-7.446 2H8a3 3 0 100 6h8a4 4 0 100-8z"
        />
      </svg>
    ),
  },
];

const switcherReviews = [
  {
    name: "Sarah M.",
    text: "Made the switch from Goodreads and never looked back. Bookie respects my privacy and actually helps me read more.",
  },
  {
    name: "Mike T.",
    text: "Import took 30 seconds. The interface is so much cleaner than Goodreads - no ads, just books.",
  },
  {
    name: "Emma R.",
    text: "Finally, a reading tracker that doesn't feel like social media. Just me and my books.",
  },
  {
    name: "Mark B.",
    text: "Goodreads felt bloated and slow. Bookie is fast, clean, and focuses on what matters - reading.",
  },
];

const switcherFAQs = [
  {
    q: "How do I import my Goodreads library?",
    a: "It's easy! Export your Goodreads library as a CSV file, then import it into Bookie with just a few taps. Your entire reading history transfers over in seconds.",
  },
  {
    q: "What makes Bookie better than Goodreads?",
    a: "Bookie focuses purely on reading - no social media features, no ads, no Amazon integration. Plus features Goodreads doesn't have like quote scanning, better privacy, and mobile widgets.",
  },
  {
    q: "Will I lose my reading data if I switch?",
    a: "Not at all! You can import your complete Goodreads history and continue building on it. You can even export your data anytime you want - it's your data.",
  },
  {
    q: "Does Bookie have social features like Goodreads?",
    a: "Bookie is designed for personal reading tracking, not social networking. We believe reading is a personal journey that shouldn't be cluttered with social pressure.",
  },
  {
    q: "Is Bookie really more private than Goodreads?",
    a: "Yes. Bookie stores your data in your personal iCloud account. We don't track you, sell your data, or show you targeted ads. Your reading habits are truly private.",
  },
  {
    q: "Can I still discover new books without Goodreads recommendations?",
    a: "Absolutely! Bookie+ includes a smart 'Shake for next read' feature that suggests books from your to-read list. You can also import recommendations from other sources.",
  },
  {
    q: "What if I want to go back to Goodreads?",
    a: "You own your data completely. You can export your Bookie library anytime and import it elsewhere. We believe in data portability and user freedom.",
  },
];

export default function GoodreadsAlternativePage() {
  return (
    <main>
      <Hero
        badge={{
          downloads: "20k+",
          rating: 4.2,
          avgRating: "4.2"
        }}
        headline="The privacy-focused alternative to Goodreads"
        subheadline="Import your Goodreads library in seconds and enjoy ad-free reading tracking with better features, complete privacy, and no social media distractions."
        primaryCTA={{
          text: "Switch from Goodreads",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "See comparison",
          href: "/features"
        }}
        image={{
          src: "/transparent-showcase.png",
          alt: "Bookie - Better than Goodreads for reading tracking",
          priority: true
        }}
      />
      
      <Benefits
        title="Why readers are switching from Goodreads"
        subtitle="Experience reading tracking the way it should be - private, focused, and designed for readers."
        items={goodreadsBenefits}
      />

      <FeatureShowcase
        title="Features that put Goodreads to shame"
        subtitle="See the advanced capabilities that make Bookie the superior choice for serious readers."
        items={[
          {
            title: "Smart Quote Scanning",
            description: "Something Goodreads will never have - capture quotes directly from physical books using your camera. No typing, no transcription errors.",
            image: "/features/scanner.png",
            features: ["Camera text recognition", "Instant quote capture", "Export & share quotes"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M4 7a3 3 0 013-3h2v2H7a1 1 0 00-1 1v2H4V7zm16 10a3 3 0 01-3 3h-2v-2h2a1 1 0 001-1v-2h2v2z"/>
              </svg>
            )
          },
          {
            title: "True Privacy Protection",
            description: "Your data stays in YOUR iCloud, not on Amazon's servers. No tracking, no ads, no data mining. Just you and your books.",
            image: "/features/stats.png",
            features: ["iCloud sync only", "Zero tracking", "No advertisements", "Complete data ownership"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z"/>
              </svg>
            )
          },
          {
            title: "Lightning-Fast Mobile Experience",
            description: "Designed mobile-first for iPhone and iPad. Add books in seconds, track progress instantly, and access everything offline.",
            image: "/features/fast-logging.png",
            features: ["Instant book search", "Offline functionality", "Widget support", "Apple ecosystem integration"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M16 10a4 4 0 10-7.446 2H8a3 3 0 100 6h8a4 4 0 100-8z"/>
              </svg>
            )
          }
        ]}
        layout="stack"
      />
      
      <SocialProof
        title="Join thousands who made the switch"
        subtitle="See what former Goodreads users are saying about their experience with Bookie."
        reviews={switcherReviews}
      />
      
      <BookiePlusSection
        title="Advanced features Goodreads doesn't have"
        description="Take your reading tracking beyond what Goodreads offers."
      />
      
      <FAQSection
        title="Switching from Goodreads"
        subtitle="Common questions from readers making the move to a better reading tracker."
        faqs={switcherFAQs}
      />
    </main>
  );
}