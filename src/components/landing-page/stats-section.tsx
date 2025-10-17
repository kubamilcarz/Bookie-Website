"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout/container";

interface Stat {
  number: string;
  label: string;
  description?: string;
}

interface StatsProps {
  title?: string;
  subtitle?: string;
  stats?: Stat[];
  layout?: "grid" | "row";
  className?: string;
}

const defaultStats: Stat[] = [
  {
    number: "20k+",
    label: "Active Readers",
    description: "Trust Bookie daily"
  },
  {
    number: "4.2★",
    label: "App Store Rating",
    description: "From 500+ reviews"
  },
  {
    number: "150k+",
    label: "Books Tracked",
    description: "And counting"
  },
  {
    number: "85%",
    label: "Read More",
    description: "After using Bookie"
  }
];

export function StatsSection({
  title = "Trusted by readers worldwide",
  subtitle = "Join thousands of book lovers who've transformed their reading habits",
  stats = defaultStats,
  layout = "row",
  className = ""
}: StatsProps) {
  return (
    <Section className={`bg-[color:var(--bookie-orange)]/5 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center mb-10">
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight font-serif text-neutral-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-neutral-700">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`
          ${layout === "grid" 
            ? "grid grid-cols-2 lg:grid-cols-4 gap-8" 
            : "flex flex-wrap justify-center gap-8 sm:gap-16"
          }
        `}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[color:var(--bookie-orange)] font-serif">
                {stat.number}
              </div>
              <div className="mt-2 text-sm sm:text-base font-medium text-neutral-900">
                {stat.label}
              </div>
              {stat.description && (
                <div className="mt-1 text-xs sm:text-sm text-neutral-600">
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}