# Schema Markup Components

This directory contains reusable JSON-LD structured data components for SEO.

## Components

### OrganizationSchema
Defines Bookie as an organization. Used globally in the root layout.

**Location:** Root layout (`app/layout.tsx`)

### WebsiteSchema
Defines the website structure and search capabilities.

**Location:** Root layout (`app/layout.tsx`)

### SoftwareApplicationSchema
Describes Bookie as a mobile application with features, ratings, and pricing.

**Location:** Homepage (`app/page.tsx`)

**Update needed:** If app ratings/download counts change significantly, update the aggregateRating values.

### ArticleSchema
Structured data for blog posts with publication dates, authors, and images.

**Usage:** Applied automatically to all blog posts in `app/blog/[slug]/page.tsx`

### BreadcrumbSchema
Navigation breadcrumbs for better search result displays.

**Usage:** Applied to blog posts. Can be added to other deep pages.

### FAQSchema
Structured FAQ data for rich snippets in search results.

**Usage:** Automatically applied to FAQ section on homepage.

## Maintenance

When updating app information, remember to update:

- **SoftwareApplicationSchema**: App version, release notes, rating/review counts
- **OrganizationSchema**: Social media profiles when available
- **ArticleSchema**: Author name if changing from "Bookie Team"

## Testing

Validate schema markup with:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
