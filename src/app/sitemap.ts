export const dynamic = 'force-static';
export default function sitemap() {
  const base = 'https://getbookie.app';

  return [
    { url: `${base}/`,               lastModified: new Date() },
    { url: `${base}/features/`,      lastModified: new Date() },
    { url: `${base}/blog/`,          lastModified: new Date() },
    { url: `${base}/about/`,         lastModified: new Date() },
    { url: `${base}/roadmap/`,       lastModified: new Date() },
    { url: `${base}/support/`,       lastModified: new Date() },
  ];
}