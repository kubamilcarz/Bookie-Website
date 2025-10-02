'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
//   { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/support', label: 'Support' },
  { href: '/about', label: 'About' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b border-white/10 bg-transparent backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold font-serif"
        >
          <Image 
                src="/bookie-logo-icon.png" 
                alt="Bookie" 
                width={32} 
                height={32}
            />
          <span>Bookie</span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-3 text-sm">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
            <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full transition-colors font-medium ${
                    active
                    ? 'text-[var(--bookie-orange)] bg-[var(--bookie-orange)]/20'
                    : 'text-neutral-900/70 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
            >
                {item.label}
            </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}