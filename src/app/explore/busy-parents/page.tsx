import { 
  Hero, 
  Benefits, 
  FeatureShowcase,
  SocialProof, 
  BookiePlusSection, 
  FAQSection 
} from "@/components/landing-page";

export const metadata = {
  title: "Reading Tracker for Busy Parents | Bookie",
  description: "Rediscover reading between school runs and bedtime stories. Quick logging and flexible goals designed for parents who steal reading moments.",
};

const parentBenefits = [
  {
    title: "Lightning-fast logging",
    desc: "Log progress in seconds while coffee is still hot. No lengthy forms or complicated interfaces.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M13 1v3h5v2l-5 7v3h3v2h-8v-2h3v-3L6 6V4h5V1h2zM6 2v2H4V2h2zm0 16v2H4v-2h2zm14-8v2h-2v-2h2z"
        />
      </svg>
    ),
  },
  {
    title: "Micro-moment tracking",
    desc: "Read 5 minutes during lunch? 2 pages before bed? Every stolen moment counts and gets celebrated.",
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
    title: "Realistic goals",
    desc: "Set goals that work with your chaos. 15 minutes a week? Perfect. One book a month? Achievable.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
        />
      </svg>
    ),
  },
];

const parentReviews = [
  {
    name: "Michelle S.",
    text: "Finally! A reading app that gets that I might only have 5 minutes between getting dinner ready and bedtime chaos.",
  },
  {
    name: "Robert T.",
    text: "Went from 'I don't have time to read' to finishing 15 books last year. Those stolen moments really add up!",
  },
  {
    name: "Amanda K.",
    text: "Love that it doesn't judge me for reading the same romance novel for 3 months. Life with toddlers is unpredictable!",
  },
  {
    name: "Jason M.",
    text: "Audiobooks while commuting + quick logging = I'm actually reading again after 5 years of kid-only books.",
  },
  {
    name: "Lisa R.",
    text: "The realistic goals saved my sanity. 2 books a year felt achievable, and I ended up reading 8!",
  },
  {
    name: "Carlos D.",
    text: "Perfect for bedtime reading when you fall asleep mid-page. Easy to remember where I was the next night.",
  },
  {
    name: "Jenny H.",
    text: "No guilt about reading breaks when life gets crazy. Finally, an app that understands parent life!",
  },
  {
    name: "Mike W.",
    text: "Quick logging while the kids are distracted means I can actually track my reading without losing my mind.",
  },
];

const parentFAQs = [
  {
    q: "I only get 10-15 minutes of reading time a day. Is that worth tracking?",
    a: "Absolutely! 15 minutes a day adds up to over 90 hours a year - that's easily 15-20 books. Every minute counts, and Bookie celebrates those micro-moments.",
  },
  {
    q: "What if I fall asleep while reading and forget my progress?",
    a: "Been there! Just estimate where you were when you log it the next day. Bookie is forgiving - approximate progress is better than no progress.",
  },
  {
    q: "Can I track both physical books and audiobooks?",
    a: "Yes! Whether you're reading while nursing, listening during school pickup, or sneaking pages during naptime - all formats count equally.",
  },
  {
    q: "I keep starting books but never finishing them because life gets crazy. Will this help?",
    a: "Perfect for this! Seeing your progress visually motivates you to push through to the end, even if it takes months. No judgment, just gentle progress tracking.",
  },
  {
    q: "What if I go weeks without reading when things get hectic?",
    a: "Life happens! Bookie doesn't shame you for breaks. When you're ready to get back to reading, just pick up where you left off. No streak pressure or guilt.",
  },
  {
    q: "Is this different from just keeping a mental note of what I'm reading?",
    a: "Much better! You'll be amazed how motivating it is to see your actual progress. Plus, you'll remember books better and can revisit great quotes later.",
  },
];

export default function BusyParentsPage() {
  return (
    <main>
      <Hero
        badge={{
          downloads: "20k+",
          rating: 4.2,
          avgRating: "4.2"
        }}
        headline="Rediscover reading between school runs and bedtime stories"
        subheadline="Finally, a reading tracker that understands parent life. Quick logging, micro-moment tracking, and realistic goals for the chaos of raising humans."
        primaryCTA={{
          text: "Reclaim Your Reading Time",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "See parent features",
          href: "/features"
        }}
        image={{
          src: "/transparent-showcase.png",
          alt: "Bookie - Reading tracker for busy parents",
          priority: true
        }}
      />
      
      <Benefits
        title="Built for the beautiful chaos of parent life"
        subtitle="Reading tracking that works around naptime, school pickup, and everything in between."
        items={parentBenefits}
      />

      <FeatureShowcase
        title="Features that fit into parent life"
        subtitle="See how these tools help busy parents squeeze reading back into their impossible schedules."
        items={[
          {
            title: "Lightning-Fast Logging",
            description: "Update your reading progress in under 10 seconds. Perfect for those brief moments when the kids are actually quiet.",
            image: "/features/fast-logging.png",
            features: ["One-tap progress updates", "Quick page estimation", "Instant book search", "Offline logging capability"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M13 1v3h5v2l-5 7v3h3v2h-8v-2h3v-3L6 6V4h5V1h2z"/>
              </svg>
            )
          },
          {
            title: "Micro-Moment Tracking",
            description: "Every stolen reading moment counts. Whether it's 5 minutes during lunch or 2 pages before bed, progress is progress.",
            image: "/features/reading-progress.png",
            features: ["Track by minutes or pages", "Celebrate small wins", "Flexible session lengths", "Progress accumulation"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 5h-2v5l4.243 2.536 1-1.732L13 11.268z"/>
              </svg>
            )
          },
          {
            title: "Parent-Friendly Stats",
            description: "See how those scattered reading moments add up over time. You're reading more than you think, and we'll prove it!",
            image: "/features/stats.png",
            features: ["Monthly summaries", "Reading streak flexibility", "Time investment tracking", "Progress celebrations"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M4 19h16v2H4zM6 5h2v12H6zm5 6h2v6h-2zm5-4h2v10h-2z"/>
              </svg>
            )
          }
        ]}
        layout="stack"
      />
      
      <SocialProof
        title="Parents finding their reading rhythm again"
        subtitle="Real stories from parents who thought their reading days were over."
        reviews={parentReviews}
      />
      
      <BookiePlusSection
        title="Advanced features for parent readers"
        description="Extra tools to help you maximize those precious reading moments."
      />
      
      <FAQSection
        title="Reading as a busy parent"
        subtitle="Common questions from parents trying to squeeze reading back into their lives."
        faqs={parentFAQs}
      />
    </main>
  );
}