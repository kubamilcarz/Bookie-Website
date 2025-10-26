export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bookie",
    "legalName": "Bookie App",
    "url": "https://getbookie.app",
    "logo": "https://getbookie.app/bookie-logo.png",
    "description": "A modern book tracking app that helps readers track their reading habits, set goals, and organize their personal library.",
    "foundingDate": "2023",
    "sameAs": [
      "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869",
      // Add your social media profiles here when available
      // "https://twitter.com/bookieapp",
      // "https://instagram.com/bookieapp",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://getbookie.app/support"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
