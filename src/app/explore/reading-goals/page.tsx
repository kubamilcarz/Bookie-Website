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
  title: "Set & Achieve Your Reading Goals - Reading Challenge App | Bookie",
  description: "Set yearly reading goals, track progress, and build consistent reading habits. The motivating reading challenge app that helps you read more books without pressure or guilt.",
  keywords: [
    "reading goals",
    "reading challenge",
    "yearly reading goal",
    "reading goal tracker",
    "books to read goal",
    "reading challenge app",
    "set reading goals",
    "book reading goals",
    "annual reading goal"
  ],
  openGraph: {
    title: "Reading Goals & Challenge Tracker App for iOS",
    description: "Set meaningful reading goals and track your progress with beautiful visualizations. Flexible, motivating, and guilt-free.",
    url: "https://getbookie.app/explore/reading-goals",
    type: "website",
    images: [
      {
        url: "https://getbookie.app/features/stats.png",
        alt: "Bookie reading goals tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Set & Achieve Your Reading Goals - Reading Challenge App",
    description: "Set yearly reading goals and track progress with beautiful statistics.",
  },
};

const goalsBenefits = [
  {
    title: "Set flexible reading goals",
    desc: "Choose your own yearly reading challenge—12 books, 50 books, or any number that feels right for you.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    )
  },
  {
    title: "Visual progress tracking",
    desc: "Watch your progress grow with beautiful charts and statistics. See exactly how close you are to your goal.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    )
  },
  {
    title: "Gentle motivation",
    desc: "No harsh notifications or guilt trips. Bookie encourages you to read more without making it feel like pressure.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    )
  },
  {
    title: "Celebrate milestones",
    desc: "Hit your quarterly targets, complete monthly challenges, reach new personal bests—every achievement counts.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    title: "Reading streak tracking",
    desc: "Build a consistent reading habit with gentle streak tracking. Read a little every day and watch your streak grow.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
      </svg>
    )
  },
  {
    title: "Detailed statistics",
    desc: "Pages read, books per month, reading pace, favorite genres—unlock powerful insights about your reading habits.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>
    )
  }
];

export default function ReadingGoalsPage() {
  return (
    <main>
      <Hero
        badge={{
          downloads: "20k+",
          rating: 4.8,
          avgRating: "4.8"
        }}
        headline="Reading goals you'll actually achieve"
        subheadline="Set meaningful reading challenges, track your progress beautifully, and build a lasting reading habit. No pressure, no guilt—just motivation."
        primaryCTA={{
          text: "Download Free on App Store",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "See all features",
          href: "/features"
        }}
        image={{
          src: "/features/stats.png",
          alt: "Bookie reading goals tracker",
          priority: true
        }}
      />

      <Benefits
        title="Goal setting that actually works"
        subtitle="Motivation without the overwhelm"
      />

      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {goalsBenefits.map((benefit, index) => (
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
        title="Features that help you achieve your reading goals"
        subtitle="Stay motivated and build lasting reading habits."
        items={[
          {
            title: "Set Flexible Reading Goals",
            description: "Choose your own yearly reading challenge—12 books, 50 books, or any number that feels right for you. Bookie adapts to your pace.",
            image: "/features/stats.png",
            features: ["Flexible yearly reading goals", "Automatic monthly breakdown", "Adjust goals anytime", "Track pages and books"]
          },
          {
            title: "Beautiful Progress Visualization",
            description: "Watch your reading journey unfold with gorgeous charts and statistics. See your progress grow day by day and celebrate milestones.",
            image: "/transparent-showcase.png",
            features: ["Visual progress charts", "Books per month breakdown", "Reading streak calendar", "Pages read over time"]
          },
          {
            title: "Track Your Reading Journey",
            description: "Log your daily reading progress and build consistency. Bookie makes it easy to see how far you've come and stay motivated.",
            image: "/features/reading-progress.png",
            features: ["Daily reading logs", "Progress tracking", "Reading history", "Motivating milestones"]
          }
        ]}
      />

      <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold font-serif text-neutral-900">
            Why Bookie&apos;s approach to goals works
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Other apps make reading feel like a chore with rigid targets and guilt-inducing notifications. 
            Bookie is different.
          </p>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 text-left">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-red-500 text-2xl">❌</div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Other Apps</h3>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Harsh reminders that create guilt</li>
                    <li>• Inflexible goals that stress you out</li>
                    <li>• Focus on quantity over enjoyment</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-green-500 text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Bookie&apos;s Approach</h3>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Gentle encouragement, not pressure</li>
                    <li>• Adjust goals whenever you need</li>
                    <li>• Celebrates progress, big or small</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <SocialProof />
      
      <BookiePlusSection />

      {/* Internal Linking */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <RelatedPages
            title="More Ways to Enhance Your Reading"
            pages={[
              {
                title: "Build Reading Habits",
                description: "Turn reading into a daily habit with gentle tracking and motivation.",
                href: "/explore/reading-habits"
              },
              {
                title: "Reading Tracker",
                description: "Complete book journal with progress tracking and statistics.",
                href: "/explore/reading-tracker"
              },
              {
                title: "For Book Lovers",
                description: "Join thousands of passionate readers on their literary journey.",
                href: "/explore/book-lovers"
              },
              {
                title: "See All Features",
                description: "Discover quote scanner, book scanner, shelves, and more.",
                href: "/features"
              },
              {
                title: "Read the Blog",
                description: "Tips for achieving your reading goals and staying motivated.",
                href: "/blog"
              },
              {
                title: "Get Support",
                description: "Learn how to make the most of Bookie's goal-setting features.",
                href: "/support"
              }
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Ready to crush your reading goals?"
        subtitle="Join thousands of readers achieving their reading challenges with Bookie."
        primaryCTA={{
          text: "Download on the App Store",
          href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869"
        }}
        secondaryCTA={{
          text: "See how it works",
          href: "/features"
        }}
      />
    </main>
  );
}
