import { 
  Hero, 
  Benefits, 
  SocialProof, 
  BookiePlusSection, 
  FAQSection,
  CTASection 
} from "@/components/landing-page";
import { SoftwareApplicationSchema } from "@/components/schema";
import { QuickLinks } from "@/components/internal-links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookie - Book Tracking App for iOS | Track Your Reading",
  description:
    "Track your reading, set goals, and build lasting reading habits. Bookie is a beautiful, simple book tracker for iOS with barcode scanning, quote capture, and reading statistics.",
  keywords: [
    "book tracker",
    "reading tracker",
    "book tracking app",
    "reading goals",
    "book journal",
    "reading habits",
    "iOS book tracker",
    "book organizer",
    "reading log",
    "book scanner"
  ],
  openGraph: {
    title: "Bookie - Book Tracking App for iOS",
    description: "Track your reading, set goals, and build lasting reading habits with Bookie.",
    url: "https://getbookie.app",
    siteName: "Bookie",
    type: "website",
    images: [
      {
        url: "https://getbookie.app/transparent-showcase.png",
        width: 1200,
        height: 630,
        alt: "Bookie app showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookie - Book Tracking App for iOS",
    description: "Track your reading, set goals, and build lasting reading habits.",
    images: ["https://getbookie.app/transparent-showcase.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <main>
        <Hero
          headline="Make reading a habit you love"
          subheadline="Turn reading into a daily habit you love. One page at a time."
          primaryCTA={{
            text: "Download on the App Store",
            href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
          }}
          secondaryCTA={{
            text: "Discover features",
            href: "/features"
          }}
          image={{
            src: "/transparent-showcase.png",
            alt: "Bookie app showcase",
            priority: true
          }}
        />
        <Benefits />
        <SocialProof />
        <BookiePlusSection />
        <FAQSection />
        
        {/* Internal Linking Section */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold font-serif text-neutral-900">
                Learn More About Bookie
              </h2>
              <p className="mt-2 text-neutral-600">
                Discover how Bookie can help you read more
              </p>
            </div>
            <QuickLinks
              links={[
                { label: "For Book Lovers", href: "/explore/book-lovers" },
                { label: "Build Reading Habits", href: "/explore/reading-habits" },
                { label: "Goodreads Alternative", href: "/explore/goodreads-alternative" },
                { label: "For Busy Parents", href: "/explore/busy-parents" },
                { label: "Digital Detox", href: "/explore/digital-detox" },
                { label: "Product Roadmap", href: "/roadmap" },
                { label: "Read Our Blog", href: "/blog" },
                { label: "Get Support", href: "/support" }
              ]}
              className="justify-center"
            />
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
