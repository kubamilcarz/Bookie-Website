export const dynamic = 'force-static';

export default function robots() {
  const base = 'https://getbookie.app';
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}