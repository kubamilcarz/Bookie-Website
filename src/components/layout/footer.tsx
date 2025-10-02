import Link from "next/link";
import Image from "next/image";

const nav = {
  Product: [
    // { label: "Pricing", href: "/premium" },
    // { label: "Support", href: "/support" },
    { label: "Features", href: "/features" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Release Notes", href: "/blog?tag=release" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Press Kit", href: "https://doors-report-rb8.craft.me/XbWZ0UVfbSZODj" },
    { label: "Public Beta", href: "https://testflight.apple.com/join/n2vMsGX9" },
  ],
  Follow: [
    { label: "Threads", href: "https://www.threads.com/@bookie_tracker" },
    { label: "Instagram", href: "https://www.instagram.com/bookie_tracker?igsh=MWs5cjRxdGwzNDh5bg==" },
  ],
  Legal: [
    { label: "Privacy", href: "https://kubamilcarz.notion.site/Bookie-Privacy-Policy-ecb3ed654d3a4cf796e49aeaba6348a8?source=copy_link" },
    { label: "Terms", href: "https://www.apple.com/legal/internet-services/terms/site.html" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--bookie-bg)] text-white select-none">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-14">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-7">
                {/* Logo / brand */}
                <div className="sm:col-span-3">
                    <Link href="/" className="flex items-center gap-2 text-lg font-semibold font-serif">
                        <Image 
                            src="/bookie-logo-icon.png" 
                            alt="Bookie" 
                            width={32} 
                            height={32}
                        />
                        <span>Bookie</span>
                    </Link>
                </div>

                {Object.entries(nav).map(([group, links]) => (
                    <div key={group} className="">
                        <h3 className="font-bold text-xs font-serif">{group}</h3>
                        <ul className="mt-3 space-y-2 text-xs">
                            {links.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} target={l.label.includes("https") ? "_blank" : "_self"} className="opacity-80 hover:opacity-100">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 border-t border-white/20 pt-6 text-sm text-white/80 text-center">
                © {new Date().getFullYear()} Bookie. Made with ❤️ by <Link href="https://kubamilcarz.com" target="_blank">Kuba Milcarz</Link>.
            </div>
        </div>
    </footer>
  );
}