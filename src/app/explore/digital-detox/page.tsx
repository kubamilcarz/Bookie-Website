import { 
  Hero, 
  ProblemSolutionSection,
  FeatureShowcase,
  StatsSection,
  SocialProof,
  ComparisonTable,
  CTASection 
} from "@/components/landing-page";

export const metadata = {
  title: "Replace Screen Time with Reading Time | Digital Detox with Bookie",
  description: "Turn mindless scrolling into mindful reading. Track your analog reading journey and rediscover the joy of physical books.",
};

const digitalDetoxProblems = [
  {
    problem: "Spend hours scrolling social media instead of reading",
    solution: "Beautiful progress tracking makes books more engaging than feeds",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M7 4h10a2 2 0 012 2v12a1 1 0 01-1.447.894L12 16.118l-5.553 2.776A1 1 0 015 18V6a2 2 0 012-2z"/>
      </svg>
    )
  },
  {
    problem: "Feel guilty about too much screen time but can't break the habit",
    solution: "Replace screen addiction with reading habit - same dopamine, better outcomes",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 5h-2v5l4.243 2.536 1-1.732L13 11.268z"/>
      </svg>
    )
  },
  {
    problem: "Want to read more but phones are too distracting",
    solution: "Track analog reading - celebrate putting the phone down",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 21s-7-4.35-7-10a5 5 0 019-3 5 5 0 019 3c0 5.65-7 10-7 10s-2-1.25-4-3.25C10 19.75 12 21 12 21z"/>
      </svg>
    )
  }
];

const detoxFeatures = [
  {
    title: "Analog Reading Focus",
    description: "Designed for physical books, not ebooks. Celebrate the tactile joy of real pages.",
    features: ["Physical book tracking", "Quote scanner for paper books", "No digital distractions", "Offline progress logging"],
    image: "/landing/analog.png",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M7 4h10a2 2 0 012 2v12a1 1 0 01-1.447.894L12 16.118l-5.553 2.776A1 1 0 015 18V6a2 2 0 012-2z"/>
      </svg>
    )
  },
  {
    title: "Mindful Progress Tracking",
    description: "Simple, calming interface that rewards slow, thoughtful reading over speed.",
    features: ["Gentle progress visualization", "Quality over quantity metrics", "Mindful reading reminders", "Reflection prompts"],
    image: "/features/reading-progress.png",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z"/>
      </svg>
    )
  },
  {
    title: "Screen Time Replacement",
    description: "Turn reading into your new healthy habit. Track the time you're NOT on screens.",
    features: ["Reading vs screen time comparison", "Habit replacement tracking", "Digital wellness insights", "Achievement celebrations"],
    image: "/features/stats.png",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 5h-2v5l4.243 2.536 1-1.732L13 11.268z"/>
      </svg>
    )
  }
];

const detoxStats = [
  {
    number: "2.5hrs",
    label: "Daily Screen Time Saved",
    description: "Average user reduction"
  },
  {
    number: "73%",
    label: "Feel Less Anxious",
    description: "After 30 days of reading"
  },
  {
    number: "12x",
    label: "More Books Read",
    description: "Vs previous year"
  },
  {
    number: "89%",
    label: "Sleep Better",
    description: "Reading before bed"
  }
];

const detoxReviews = [
  {
    name: "Sarah M.",
    text: "Replaced my evening Instagram scroll with reading. Best habit change I've ever made. Sleep so much better now.",
  },
  {
    name: "Michael R.",
    text: "Was spending 4+ hours on my phone daily. Now I read for 2 hours instead. Feel so much more accomplished.",
  },
  {
    name: "Emma K.",
    text: "The quote scanner is perfect for capturing wisdom from physical books instead of screenshots from Twitter.",
  },
  {
    name: "David L.",
    text: "Finally broke my phone addiction by replacing it with something equally engaging but actually good for me.",
  },
  {
    name: "Lisa H.",
    text: "Love seeing my 'pages read' vs 'hours on phone' comparison. Books are winning now!",
  },
  {
    name: "James T.",
    text: "Rediscovered the joy of physical books. No notifications, no distractions, just pure reading bliss.",
  }
];

const screenTimeComparison = [
  {
    feature: "Mental Impact",
    competitor: "Anxiety & comparison",
    bookie: "Knowledge & calm"
  },
  {
    feature: "Time Investment",
    competitor: "Endless scrolling",
    bookie: "Purposeful reading"
  },
  {
    feature: "Learning Outcome",
    competitor: "Scattered info",
    bookie: "Deep understanding"
  },
  {
    feature: "Sleep Quality",
    competitor: "Blue light disruption",
    bookie: "Relaxing wind-down"
  },
  {
    feature: "Social Connection",
    competitor: "Shallow interactions",
    bookie: "Meaningful conversations"
  },
  {
    feature: "Long-term Value",
    competitor: "Forgotten content",
    bookie: "Lasting knowledge"
  }
];

export default function DigitalDetoxPage() {
  return (
    <main>
      <Hero
        badge={{
          downloads: "20k+",
          rating: 4.2,
          avgRating: "4.2"
        }}
        headline="Replace mindless scrolling with mindful reading"
        subheadline="Break free from phone addiction. Turn screen time into book time and rediscover the deep satisfaction of analog reading."
        primaryCTA={{
          text: "Start Your Digital Detox",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "Learn more",
          href: "/features"
        }}
        image={{
          src: "/transparent-showcase.png",
          alt: "Bookie - Digital detox through reading",
          priority: true
        }}
      />
      
      <ProblemSolutionSection
        title="Break the scroll, build the habit"
        subtitle="Transform your relationship with technology through the power of books."
        items={digitalDetoxProblems}
      />

      <FeatureShowcase
        title="Designed for analog reading"
        subtitle="Features that celebrate physical books and mindful reading habits."
        items={detoxFeatures}
        layout="stack"
      />

      <StatsSection
        title="Real results from digital detox readers"
        subtitle="See the measurable impact of choosing books over screens."
        stats={detoxStats}
      />
      
      <SocialProof
        title="Readers who chose books over screens"
        subtitle="Real stories from people who successfully replaced scrolling with reading."
        reviews={detoxReviews}
      />

      <ComparisonTable
        title="Books vs social media"
        subtitle="See why reading beats scrolling in every way that matters."
        competitorName="Social Media"
        items={screenTimeComparison}
      />
      
      <CTASection
        title="Ready to trade screens for stories?"
        subtitle="Join thousands who've discovered that books are more addictive than social media - in the best possible way."
        badge="Digital Wellness"
        variant="orange"
        primaryCTA={{
          text: "Start Reading More",
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