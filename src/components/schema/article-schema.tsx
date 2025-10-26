interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  url: string;
  imageUrl?: string;
  authorName?: string;
  tags?: string[];
}

export function ArticleSchema({
  title,
  description,
  publishedAt,
  modifiedAt,
  url,
  imageUrl,
  authorName = "Bookie Team",
  tags = []
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": publishedAt,
    "dateModified": modifiedAt || publishedAt,
    "author": {
      "@type": "Organization",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bookie",
      "logo": {
        "@type": "ImageObject",
        "url": "https://getbookie.app/bookie-logo.png"
      }
    },
    ...(imageUrl && {
      "image": {
        "@type": "ImageObject",
        "url": imageUrl
      }
    }),
    ...(tags.length > 0 && {
      "keywords": tags.join(", ")
    }),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
