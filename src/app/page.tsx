import { 
  Hero, 
  Benefits, 
  SocialProof, 
  BookiePlusSection, 
  FAQSection 
} from "@/components/landing-page";

export default function HomePage() {
  return (
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
    </main>
  );
}
