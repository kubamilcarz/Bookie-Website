'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useRef } from 'react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
//   { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
//   { href: '/support', label: 'Support' },
  { href: '/about', label: 'About' },
]

const explorePages = [
  { href: '/explore/book-lovers', label: 'For Book Lovers', description: 'Perfect reading companion' },
  { href: '/explore/goodreads-alternative', label: 'Goodreads Alternative', description: 'Privacy-focused tracking' },
  { href: '/explore/reading-habits', label: 'Build Reading Habits', description: 'Gentle habit formation' },
  { href: '/explore/busy-parents', label: 'For Busy Parents', description: 'Quick micro-moment tracking' },
  { href: '/explore/digital-detox', label: 'Digital Detox', description: 'Mindful analog reading' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setIsExploreDropdownOpen(true)
  }

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsExploreDropdownOpen(false)
    }, 150) // Small delay to allow moving to dropdown
  }

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

        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          {nav.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
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
          
          {/* Explore Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <button
              onClick={() => setIsExploreDropdownOpen(!isExploreDropdownOpen)}
              className={`px-3 py-1.5 rounded-full transition-colors font-medium flex items-center gap-1 ${
                pathname.startsWith('/explore')
                  ? 'text-[var(--bookie-orange)] bg-[var(--bookie-orange)]/20'
                  : 'text-neutral-900/70 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              Explore
              <svg
                className={`w-4 h-4 transition-transform ${
                  isExploreDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isExploreDropdownOpen && (
              <div className="absolute top-full left-0 pt-1 w-64 z-[999]">
                <div className="bg-white rounded-lg shadow-lg border border-black/5 py-2">
                  {explorePages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="block px-4 py-3 hover:bg-neutral-50 transition-colors group"
                      onClick={() => setIsExploreDropdownOpen(false)}
                    >
                      <div className="font-medium text-neutral-900 group-hover:text-[var(--bookie-orange)]">
                        {page.label}
                      </div>
                      <div className="text-sm text-neutral-600 mt-0.5">
                        {page.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-2">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? 'text-[var(--bookie-orange)] bg-[var(--bookie-orange)]/20'
                      : 'text-neutral-900/70 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            
            {/* Explore section in mobile */}
            <div className="pt-2">
              <div className="px-3 py-2 text-sm font-semibold text-neutral-500 tracking-wider">
                Explore
              </div>
              {explorePages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === page.href
                      ? 'text-[var(--bookie-orange)] bg-[var(--bookie-orange)]/20'
                      : 'text-neutral-900/70 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  <div className="font-medium">{page.label}</div>
                  <div className="text-sm text-neutral-600 mt-0.5">{page.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}