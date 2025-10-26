export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Bookie - Book Tracker",
    "applicationCategory": "Lifestyle",
    "operatingSystem": "iOS 16.0 or later",
    "description": "Track your reading, set goals, and build lasting reading habits. Bookie is a beautiful, simple book tracker designed for readers who want to stay motivated and organized.",
    "url": "https://getbookie.app",
    "downloadUrl": "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869",
    "screenshot": [
      "https://getbookie.app/transparent-showcase.png"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1200",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "category": "Free with In-App Purchases",
      "availability": "https://schema.org/InStock"
    },
    "softwareVersion": "2.0.0",
    "releaseNotes": "Bookie 2.0 brings a fresh new design, powerful search, customizable themes, and many more features.",
    "datePublished": "2023-01-15",
    "dateModified": "2025-10-15",
    "author": {
      "@type": "Organization",
      "name": "Bookie"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bookie"
    },
    "featureList": [
      "Track books you're reading, want to read, and have finished",
      "Set and achieve yearly reading goals",
      "Barcode scanner for quick book entry",
      "Quote scanner with OCR technology",
      "Reading statistics and insights",
      "Custom book shelves and collections",
      "Reading notes and highlights",
      "Beautiful, customizable themes",
      "Privacy-focused with offline support"
    ],
    "requirements": "Requires iOS 16.0 or later. Compatible with iPhone and iPad."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
