export const dynamic = 'force-static';

export default function robots() {
  const base = 'https://getbookie.app';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/', // Block API routes if you add them
          '/_next/', // Block Next.js internal files
          '/404', // Block 404 page
          '/*.json$', // Block JSON files
        ],
        crawlDelay: 0,
      },
      // Optimize for Google
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      // Optimize for Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}