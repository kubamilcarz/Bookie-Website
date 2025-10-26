import Link from "next/link";

interface QuickLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface QuickLinksProps {
  links: QuickLink[];
  className?: string;
}

export function QuickLinks({ links, className = "" }: QuickLinksProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:border-[color:var(--bookie-orange)] hover:text-[color:var(--bookie-orange)] hover:shadow-sm transition-all"
        >
          {link.icon && <span className="w-4 h-4">{link.icon}</span>}
          {link.label}
        </Link>
      ))}
    </div>
  );
}
