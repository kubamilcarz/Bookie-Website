export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bookie - Book Tracking App",
    "url": "https://getbookie.app",
    "description": "Track your reading, set goals, and build lasting reading habits with Bookie - a beautiful book tracking app for iOS.",
    "publisher": {
      "@type": "Organization",
      "name": "Bookie"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://getbookie.app/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
