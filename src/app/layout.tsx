import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Bookie – Reading tracker",
  description:
    "Track what you read. Stay motivated. Bookie+ for power features.",
  metadataBase: new URL("https://bookie.app"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/bookie-logo.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: "/bookie-logo-icon.png",
    shortcut: "/favicon.ico",
  },
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
