import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { OrganizationSchema, WebsiteSchema } from "@/components/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://getbookie.app"),
  title: {
    default: "Bookie - Book Tracking App for iOS | Track Your Reading",
    template: "%s | Bookie"
  },
  description:
    "Track your reading, set goals, and build lasting reading habits. Bookie is a beautiful book tracker for iOS with barcode scanning, quote capture, and statistics.",
  keywords: [
    "book tracker",
    "reading tracker",
    "book tracking app",
    "iOS book app",
    "reading goals",
    "book journal",
    "reading habits",
    "book scanner",
    "quote scanner"
  ],
  authors: [{ name: "Bookie" }],
  creator: "Bookie",
  publisher: "Bookie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/bookie-logo.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: "/bookie-logo-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getbookie.app",
    siteName: "Bookie",
    title: "Bookie - Book Tracking App for iOS",
    description: "Track your reading, set goals, and build lasting reading habits.",
    images: [
      {
        url: "/transparent-showcase.png",
        width: 1200,
        height: 630,
        alt: "Bookie app showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookie - Book Tracking App for iOS",
    description: "Track your reading, set goals, and build lasting reading habits.",
    images: ["/transparent-showcase.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add when you get them:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
    <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-8M4574LJFH"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-8M4574LJFH');
          `,
        }}
      />
      <OrganizationSchema />
      <WebsiteSchema />
    </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
