"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout/container";

interface ProblemSolutionItem {
  problem: string;
  solution: string;
  icon?: React.ReactNode;
}

interface ProblemSolutionProps {
  title?: string;
  subtitle?: string;
  items?: ProblemSolutionItem[];
  className?: string;
}

const defaultItems: ProblemSolutionItem[] = [
  {
    problem: "Forget which books you've read and want to re-read",
    solution: "Complete reading history with ratings and notes",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    )
  },
  {
    problem: "Start books but never finish them",
    solution: "Visual progress tracking that motivates completion",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M7 4h10a2 2 0 012 2v12a1 1 0 01-1.447.894L12 16.118l-5.553 2.776A1 1 0 015 18V6a2 2 0 012-2z"/>
      </svg>
    )
  },
  {
    problem: "Lose track of great quotes and passages",
    solution: "Smart quote scanner captures text instantly",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4 7a3 3 0 013-3h2v2H7a1 1 0 00-1 1v2H4V7zm16 10a3 3 0 01-3 3h-2v-2h2a1 1 0 001-1v-2h2v2z"/>
      </svg>
    )
  },
  {
    problem: "Can't remember if you liked a book months later",
    solution: "Rate and review as you read, not months later",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2l3 7h7l-5.5 4 2.5 7L12 16l-7 4 2.5-7L2 9h7z"/>
      </svg>
    )
  }
];

export function ProblemSolutionSection({
  title = "Stop letting great books slip away",
  subtitle = "We solve the reading problems that frustrated book lovers know too well.",
  items = defaultItems,
  className = ""
}: ProblemSolutionProps) {
return (
    <Section className={className}>
        <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-semibold tracking-tight font-serif text-neutral-900 sm:text-4xl">
                    {title}
                </h2>
                <p className="mt-4 text-lg text-neutral-700">
                    {subtitle}
                </p>
            </div>

            <div className="space-y-8">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-black/5 shadow-sm"
                    >
                        {/* Problem */}
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 11H7v-2h10v2z"/>
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-red-800 uppercase tracking-wide">Problem</span>
                            </div>
                            <p className="text-neutral-700 text-lg">{item.problem}</p>
                        </div>

                        {/* Arrow */}
                        <div className="text-[color:var(--bookie-orange)] shrink-0">
                            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                                <path d="M4 12h12l-5.5-5.5L12 5l7 7-7 7-1.5-1.5L16 12H4z"/>
                            </svg>
                        </div>

                        {/* Solution */}
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                    {item.icon || (
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                                        </svg>
                                    )}
                                </div>
                                <span className="text-sm font-medium text-green-800 uppercase tracking-wide">Solution</span>
                            </div>
                            <p className="text-neutral-900 text-lg font-medium">{item.solution}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Container>
    </Section>
);
}