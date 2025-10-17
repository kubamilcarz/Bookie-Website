"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section } from "@/components/layout/container";

interface FeatureShowcaseItem {
  title: string;
  description: string;
  image?: string;
  features?: string[];
  icon?: React.ReactNode;
}

interface FeatureShowcaseProps {
  title?: string;
  subtitle?: string;
  items?: FeatureShowcaseItem[];
  layout?: "tabs" | "carousel" | "stack";
  className?: string;
}

const defaultItems: FeatureShowcaseItem[] = [
  {
    title: "Quick Book Logging",
    description: "Add books in seconds with search or barcode scanning. No complicated forms, just pure speed.",
    features: ["Barcode scanner", "ISBN search", "Manual entry", "Bulk import"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M7 4h10a2 2 0 012 2v12a1 1 0 01-1.447.894L12 16.118l-5.553 2.776A1 1 0 015 18V6a2 2 0 012-2z"/>
      </svg>
    )
  },
  {
    title: "Smart Progress Tracking",
    description: "Visual progress that motivates you to keep reading. See exactly how far you've come.",
    features: ["Page tracking", "Time tracking", "Reading speed", "Progress widgets"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4 19h16v2H4zM6 5h2v12H6zm5 6h2v6h-2zm5-4h2v10h-2z"/>
      </svg>
    )
  },
  {
    title: "Quote Scanner",
    description: "Never lose a great quote again. Scan text from physical books instantly with your camera.",
    features: ["Camera scanning", "Text recognition", "Quote organization", "Easy sharing"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4 7a3 3 0 013-3h2v2H7a1 1 0 00-1 1v2H4V7zm16 10a3 3 0 01-3 3h-2v-2h2a1 1 0 001-1v-2h2v2z"/>
      </svg>
    )
  }
];

export function FeatureShowcase({
  title = "Features that make reading effortless",
  subtitle = "Discover the tools that help thousands of readers stay motivated and organized.",
  items = defaultItems,
  layout = "tabs",
  className = ""
}: FeatureShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (layout === "tabs") {
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

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {items.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeIndex === index
                    ? "bg-[color:var(--bookie-orange)] text-white"
                    : "bg-white text-neutral-700 hover:bg-neutral-50 border border-black/10"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-black/5 shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[color:var(--bookie-orange)]/10 rounded-xl flex items-center justify-center text-[color:var(--bookie-orange)]">
                        {items[activeIndex].icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-neutral-900 font-serif">
                        {items[activeIndex].title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-neutral-700 mb-6">
                      {items[activeIndex].description}
                    </p>

                    {items[activeIndex].features && (
                      <ul className="space-y-2">
                        {items[activeIndex].features!.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-neutral-700">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="h-3 w-3 text-green-600" fill="currentColor">
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                              </svg>
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex items-center justify-center">
                    {items[activeIndex].image ? (
                      <div className="aspect-[3/2] w-full max-w-sm">
                        <Image 
                          src={items[activeIndex].image!} 
                          alt={items[activeIndex].title}
                          width={400}
                          height={600}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    ) : (
                      <div className="text-6xl text-[color:var(--bookie-orange)]/30">
                        {items[activeIndex].icon}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </Section>
    );
  }

  // Stack layout (simple version)
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
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-black/5 shadow-sm p-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[color:var(--bookie-orange)]/10 rounded-xl flex items-center justify-center text-[color:var(--bookie-orange)]">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 font-serif">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-neutral-700 mb-6">
                    {item.description}
                  </p>

                  {item.features && (
                    <ul className="space-y-2">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-neutral-700">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="h-3 w-3 text-green-600" fill="currentColor">
                              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className={`flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  {item.image ? (
                    <div className="aspect-[3/2] w-full max-w-sm">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        width={400}
                        height={600}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  ) : (
                    <div className="text-6xl text-[color:var(--bookie-orange)]/30">
                      {item.icon}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}