import Link from "next/link";

interface RelatedPage {
  title: string;
  description: string;
  href: string;
}

interface RelatedPagesProps {
  title?: string;
  pages: RelatedPage[];
  className?: string;
}

export function RelatedPages({ 
  title = "Explore More", 
  pages,
  className = ""
}: RelatedPagesProps) {
  return (
    <section className={`mt-16 pt-12 border-t border-neutral-200 ${className}`}>
      <h2 className="text-2xl font-semibold font-serif text-neutral-900 mb-6">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.href}
            className="group block p-6 rounded-xl border border-neutral-200 bg-white hover:border-[color:var(--bookie-orange)] hover:shadow-md transition-all"
          >
            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-[color:var(--bookie-orange)] transition-colors">
              {page.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              {page.description}
            </p>
            <div className="mt-4 text-sm font-medium text-[color:var(--bookie-orange)] flex items-center gap-1">
              Learn more 
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
