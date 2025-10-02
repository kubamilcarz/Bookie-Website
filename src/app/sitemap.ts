import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bookie.app";
  const staticRoutes = ["", "/about", "/premium", "/blog", "/support"].map(
    (p) => ({
      url: `${base}${p || "/"}`,
      changefreq: "weekly" as const,
      priority: 0.8,
    })
  );

//   const blog = allBlogPosts.map((p) => ({
//     url: `${base}/blog/${p.slug}`,
//     lastModified: p.date,
//   }));
//   const support = allSupportArticles.map((a) => ({
//     url: `${base}/support/${a.slug}`,
//   }));

  return [...staticRoutes, /*...blog, ...support*/];
}
