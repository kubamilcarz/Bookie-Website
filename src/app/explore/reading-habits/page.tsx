import { 
  Hero, 
  Benefits, 
  FeatureShowcase,
  SocialProof, 
  BookiePlusSection, 
  FAQSection 
} from "@/components/landing-page";

export const metadata = {
  title: "Build a Reading Habit That Actually Sticks | Bookie",
  description: "Stop abandoning books halfway through. Bookie's gentle approach helps you build consistent reading habits without pressure or guilt. Flexible goals, streak tracking, and motivating stats.",
  keywords: [
    "build reading habit",
    "reading habits tracker",
    "consistent reading",
    "reading streak",
    "reading motivation",
    "finish more books",
    "reading goals app"
  ],
  openGraph: {
    title: "Build a Reading Habit That Actually Sticks",
    description: "Gentle tracking approach that helps you build consistent reading habits without pressure.",
    url: "https://getbookie.app/explore/reading-habits",
    type: "website",
    images: [
      {
        url: "https://getbookie.app/transparent-showcase.png",
        alt: "Build reading habits with Bookie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build a Reading Habit That Actually Sticks",
    description: "Gentle tracking that helps you build consistent reading habits without pressure.",
  },
};

const habitBenefits = [
  {
    title: "Gentle streak tracking",
    desc: "No harsh streaks that break with one missed day. Our flexible approach keeps you motivated, not stressed.",
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
    title: "Micro-progress tracking",
    desc: "Log just a few pages or minutes. Small progress still counts and builds momentum.",
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
    title: "Smart reminders",
    desc: "Optional nudges that encourage without nagging. Set your perfect reading rhythm.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Achievable goals",
    desc: "Start with just 10 minutes or 5 pages a day. Build confidence with goals you can actually hit.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
        />
      </svg>
    ),
  },
  {
    title: "Progress visualization",
    desc: "See your reading habit forming with beautiful charts that celebrate every step forward.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M4 19h16v2H4zM6 5h2v12H6zm5 6h2v6h-2zm5-4h2v10h-2z"
        />
      </svg>
    ),
  },
  {
    title: "No judgment zone",
    desc: "Stopped reading for a week? No problem. Pick up where you left off without guilt or shame.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 21s-7-4.35-7-10a5 5 0 019-3 5 5 0 019 3c0 5.65-7 10-7 10s-2-1.25-4-3.25C10 19.75 12 21 12 21z"
        />
      </svg>
    ),
  },
];

const habitReviews = [
  {
    name: "Jennifer K.",
    text: "First reading app that doesn't make me feel guilty when I miss a day. Actually helped me build a sustainable habit.",
  },
  {
    name: "Marcus R.",
    text: "Started with just 10 minutes a day. Six months later, I'm reading 30+ minutes consistently. The gentle approach works!",
  },
  {
    name: "Sarah L.",
    text: "No more abandoned books! The progress tracking keeps me motivated to finish what I start.",
  },
  {
    name: "David M.",
    text: "Finally found an app that understands life gets busy. The flexible streak system is perfect for real people.",
  },
  {
    name: "Emily T.",
    text: "Went from reading 2 books a year to 24. The micro-progress tracking made all the difference.",
  },
  {
    name: "Chris H.",
    text: "Love how it celebrates small wins. Every page counts, and this app makes you feel that way.",
  },
  {
    name: "Rachel G.",
    text: "The gentle reminders actually work. Not pushy, just a friendly nudge to pick up my book.",
  },
  {
    name: "Tom B.",
    text: "Built my first consistent reading habit at 35 years old. Better late than never, thanks to this approach!",
  },
];

const habitFAQs = [
  {
    q: "How is this different from other habit trackers?",
    a: "Most habit trackers are all-or-nothing. Bookie understands that reading habits need flexibility. Miss a day? No problem. Read just one page? That's progress worth celebrating.",
  },
  {
    q: "What if I keep starting books but never finishing them?",
    a: "Bookie's progress tracking helps you see how close you are to finishing, which motivates completion. Plus, you can set smaller daily goals that feel achievable.",
  },
  {
    q: "How long does it take to build a reading habit?",
    a: "Research shows habits form in 21-66 days. Bookie's gentle approach helps you build consistency without the pressure that often leads to giving up.",
  },
  {
    q: "Can I track different types of reading goals?",
    a: "Yes! Set goals by pages, minutes, or books. Start small and build up. The app adapts to your natural reading pace.",
  },
  {
    q: "What if I'm a slow reader?",
    a: "Perfect! Bookie celebrates progress at any pace. Whether you read 1 page or 100, it all counts toward building your habit.",
  },
  {
    q: "Will I get overwhelmed by notifications?",
    a: "Never. Reminders are optional and gentle. You control when and how often you want encouragement, if at all.",
  },
  {
    q: "What if I fall off the wagon?",
    a: "Just start again! Bookie doesn't shame you for breaks. Life happens, and sustainable habits account for that reality.",
  },
];

export default function ReadingHabitsPage() {
  return (
    <main>
      <Hero
        badge={{
          downloads: "20k+",
          rating: 4.2,
          avgRating: "4.2"
        }}
        headline="Build a reading habit that actually sticks"
        subheadline="Stop abandoning books halfway through. Our gentle, flexible approach helps you read consistently without the pressure or guilt that kills most reading goals."
        primaryCTA={{
          text: "Start Building Your Habit",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "Learn the approach",
          href: "/features"
        }}
        image={{
          src: "/transparent-showcase.png",
          alt: "Bookie - Build lasting reading habits",
          priority: true
        }}
      />
      
      <Benefits
        title="A reading habit approach that actually works"
        subtitle="Forget harsh streaks and impossible goals. Build sustainable reading habits with kindness and flexibility."
        items={habitBenefits}
      />

      <FeatureShowcase
        title="Tools that make habits stick"
        subtitle="See the specific features that help thousands of people build consistent, lasting reading habits."
        items={[
          {
            title: "Gentle Progress Tracking",
            description: "Track your reading in pages, minutes, or sessions. Every bit of progress counts, and the app celebrates it all without judgment.",
            image: "/features/reading-progress.png",
            features: ["Flexible daily goals", "Progress celebrations", "No harsh streaks", "Multiple tracking modes"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M4 19h16v2H4zM6 5h2v12H6zm5 6h2v6h-2zm5-4h2v10h-2z"/>
              </svg>
            )
          },
          {
            title: "Smart Habit Insights",
            description: "Understand your reading patterns with gentle analytics. See when you read most, what motivates you, and how to optimize your habit.",
            image: "/features/stats.png",
            features: ["Motivation tracking", "Habit strength score", "Personalized insights"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 5h-2v5l4.243 2.536 1-1.732L13 11.268z"/>
              </svg>
            )
          },
          {
            title: "Quick Book Logging",
            description: "Remove friction from habit formation. Add books and update progress in seconds, so tracking never becomes a chore.",
            image: "/features/fast-logging.png",
            features: ["One-tap progress updates", "Quick book search", "Barcode scanning", "Offline logging"],
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M7 4h10a2 2 0 012 2v12a1 1 0 01-1.447.894L12 16.118l-5.553 2.776A1 1 0 015 18V6a2 2 0 012-2z"/>
              </svg>
            )
          }
        ]}
        layout="stack"
      />
      
      <SocialProof
        title="Real people, real reading habits"
        subtitle="See how others built lasting reading habits with Bookie's gentle approach."
        reviews={habitReviews}
      />
      
      <BookiePlusSection
        title="Advanced habit-building tools"
        description="Take your reading habit to the next level with detailed insights and smart suggestions."
      />
      
      <FAQSection
        title="Building better reading habits"
        subtitle="Everything you need to know about creating a reading habit that lasts."
        faqs={habitFAQs}
      />
    </main>
  );
}