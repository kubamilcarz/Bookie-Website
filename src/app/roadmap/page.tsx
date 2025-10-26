// app/roadmap/page.tsx
import Link from "next/link";
import { Container, Section } from "@/components/layout/container";

type RoadmapItem = {
  title: string;
  desc: string;
  status: "planned" | "in-progress" | "shipped" | "exploring";
  eta?: string;
  tag?: string;
  votes?: number;
};

type Bucket = {
  id: "now" | "next" | "later" | "ideas";
  title: string;
  subtitle: string;
  items: RoadmapItem[];
};

const buckets: Bucket[] = [
  {
    id: "now",
    title: "Now",
    subtitle: "Actively building — shipping soon",
    items: [
      {
        title: "Immersive Themes",
        desc: "Custom color themes that inspire you and feel truly yours.",
        status: "shipped",
        eta: "Q3 2025",
        tag: "Bookie+",
      },
      {
        title: "Liquid Glass",
        desc: "iOS 26+ exclusive redesign with fluid animations and tactile interactions.",
        status: "shipped",
        eta: "Q4 2025",
      },
      {
        title: "Reading Challenge 2.0",
        desc: "A more engaging and rewarding reading challenge experience.",
        status: "planned",
        eta: "Q4 2025",
      },
    ],
  },
  {
    id: "next",
    title: "Next",
    subtitle: "Up next on the roadmap",
    items: [
      {
        title: "Reading Goals 2.0",
        desc: "Flexible monthly/yearly goals, streak cushions, and gentle nudges.",
        status: "planned",
        eta: "Q1 2026",
      },
    ],
  },
  {
    id: "later",
    title: "Later",
    subtitle: "On the horizon — researching and sizing",
    items: [
      {
        title: "Audiobook friendly logs",
        desc: "Better support for audiobooks: speed, narrator, and progress sync.",
        status: "exploring",
      },
      {
        title: "Reading Sessions",
        desc: "Guided sessions, timers, and ambient focus options.",
        status: "exploring",
      },
    ],
  },
  {
    id: "ideas",
    title: "Ideas",
    subtitle: "Concepts we’re considering — feedback welcome",
    items: [
      {
        title: "Public Profiles",
        desc: "Minimal landing with shelves and favorite quotes.",
        status: "planned",
      },
      {
        title: "Family Mode",
        desc: "Multiple readers on one device with quick-switch profiles.",
        status: "planned",
      },
      {
        title: "Quote Templates",
        desc: "Auto-styled images for sharing quotes to social.",
        status: "planned",
      },
    ],
  },
];

const statusStyles: Record<RoadmapItem["status"], string> = {
  "in-progress":
    "bg-[color:var(--bookie-bg)]/40 text-neutral-900 border border-black/10",
  planned:
    "bg-white/70 text-neutral-700 border border-black/10",
  shipped:
    "bg-green-600/10 text-green-700 border border-green-500/20",
  exploring:
    "bg-amber-500/10 text-amber-700 border border-amber-500/20",
};

function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] ${className}`}>
      {children}
    </span>
  );
}

export const metadata = {
  title: "Roadmap - Upcoming Features & Product Updates | Bookie",
  description:
    "See what's next for Bookie: upcoming features, improvements in development, and ideas we're exploring. Share feedback and vote on features you'd like to see.",
  openGraph: {
    title: "Bookie Roadmap - What's Coming Next",
    description: "Upcoming features, improvements in progress, and ideas we're exploring for Bookie.",
    url: "https://getbookie.app/roadmap",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bookie Roadmap - What's Coming Next",
    description: "Upcoming features, improvements in progress, and ideas we're exploring.",
  },
};

export default function RoadmapPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold font-serif tracking-tight text-neutral-900">
              Roadmap
            </h1>
            <p className="mt-2 text-neutral-700">
              A transparent look at what we’re building next. Vote with your feedback on the{" "}
              <Link
                href="/support"
                className="underline decoration-[color:var(--bookie-orange)]/40 underline-offset-2 hover:decoration-[color:var(--bookie-orange)]"
              >
                Support
              </Link>{" "}
              page — it genuinely shapes the order of work.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-8">
            {buckets.map((bucket) => (
              <section key={bucket.id} id={bucket.id}>
                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                      {bucket.title}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-600">
                      {bucket.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2">
                  {bucket.items.map((item) => (
                    <li
                      key={item.title}
                      className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition hover:shadow-md"
                    >
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge className={statusStyles[item.status]}>
                          {item.status === "in-progress" && "In progress"}
                          {item.status === "planned" && "Planned"}
                          {item.status === "shipped" && "Shipped"}
                          {item.status === "exploring" && "Exploring"}
                        </Badge>
                        {item.tag ? (
                          <Badge className="bg-[color:var(--bookie-bg)]/60 text-neutral-800">
                            {item.tag}
                          </Badge>
                        ) : null}
                        {item.eta ? (
                          <Badge className="bg-white/70 text-neutral-600 border border-black/10">
                            ETA {item.eta}
                          </Badge>
                        ) : null}
                      </div>

                      <h3 className="text-base font-semibold text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-700">
                        {item.desc}
                      </p>

                      <div className="mt-3 flex justify-end">
                        {item.status === "in-progress" ? (
                          <div className="h-2 w-24 overflow-hidden rounded-full bg-black/10">
                            <div className="h-full w-1/2 bg-[color:var(--bookie-orange)]" />
                          </div>
                        ) : item.status === "planned" ? (
                          <div className="h-2 w-24 rounded-full bg-black/10" />
                        ) : item.status === "shipped" ? (
                          <div className="h-2 w-24 overflow-hidden rounded-full bg-black/10">
                            <div className="h-full w-full bg-[color:var(--bookie-orange)]" />
                          </div>
                        ) : (
                          <div className="h-2 w-24 rounded-full bg-black/10" />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-black/10 bg-[color:var(--bookie-bg)]/10 p-6 text-center">
            <h3 className="text-lg font-semibold text-neutral-900">
              Have an idea or a must-have feature?
            </h3>
            <p className="mt-1 text-sm text-neutral-700">
              Tell us what would make Bookie better for you. We prioritize features with clear impact.
            </p>
            <div className="mt-4 flex justify-center">
            <Link
                href="mailto:support@kubamilcarz.com?subject=Bookie Feedback"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--bookie-orange)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--bookie-orange)]/50"
            >
                Share feedback
            </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}