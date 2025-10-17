"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout/container";

interface ComparisonItem {
  feature: string;
  competitor: string | boolean;
  bookie: string | boolean;
}

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
  competitorName?: string;
  items?: ComparisonItem[];
  className?: string;
}

const defaultItems: ComparisonItem[] = [
  {
    feature: "Privacy Protection",
    competitor: "Sells your data",
    bookie: "Your data stays private"
  },
  {
    feature: "Quote Scanner",
    competitor: false,
    bookie: true
  },
  {
    feature: "Advertisements",
    competitor: "Lots of ads",
    bookie: "Completely ad-free"
  },
  {
    feature: "Social Pressure",
    competitor: "Public reviews required",
    bookie: "Personal tracking only"
  },
  {
    feature: "Mobile Experience",
    competitor: "Clunky web-first",
    bookie: "Native iOS app"
  },
  {
    feature: "Data Ownership",
    competitor: "Platform locked-in",
    bookie: "Export anytime"
  }
];

export function ComparisonTable({
  title = "Why choose Bookie?",
  subtitle = "See how Bookie compares to other reading trackers",
  competitorName = "Other Apps",
  items = defaultItems,
  className = ""
}: ComparisonTableProps) {
  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="currentColor">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="currentColor">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <Section className={`bg-neutral-50 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight font-serif text-neutral-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-neutral-700">
            {subtitle}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg border border-black/5"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-neutral-50 border-b border-black/5">
            <div className="p-4 font-medium text-neutral-700"></div>
            <div className="p-4 text-center font-semibold text-neutral-600 border-x border-black/5">
              {competitorName}
            </div>
            <div className="p-4 text-center font-semibold text-[color:var(--bookie-orange)] bg-[color:var(--bookie-orange)]/5">
              Bookie
            </div>
          </div>

          {/* Comparison rows */}
          {items.map((item, i) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid grid-cols-3 border-b border-black/5 last:border-b-0 hover:bg-neutral-25"
            >
              <div className="p-4 font-medium text-neutral-900">
                {item.feature}
              </div>
              <div className="p-4 text-center text-neutral-600 border-x border-black/5">
                {renderValue(item.competitor)}
              </div>
              <div className="p-4 text-center text-neutral-900 bg-[color:var(--bookie-orange)]/5">
                {renderValue(item.bookie)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}