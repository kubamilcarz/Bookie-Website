# Landing Page Components

This directory contains reusable landing page components that can be mixed and matched to create different SEO-optimized landing pages for Bookie.

## Components

### Hero
The main hero section with customizable headline, subheadline, CTAs, and image.

```tsx
<Hero
  badge={{ // Optional social proof badge
    downloads: "20k+",
    rating: 4.2,
    avgRating: "4.2"
  }}
  headline="Your main headline"
  subheadline="Supporting text that explains the value proposition"
  primaryCTA={{
    text: "Primary action",
    href: "/link"
  }}
  secondaryCTA={{ // Optional
    text: "Secondary action", 
    href: "/link"
  }}
  image={{
    src: "/image.png",
    alt: "Alt text",
    priority: true // Optional, for above-fold images
  }}
/>
```

### Benefits
Feature highlights in a grid layout.

```tsx
<Benefits
  title="Custom title" // Optional
  subtitle="Custom subtitle" // Optional  
  items={customItems} // Optional, uses default Bookie features
  className="additional-classes" // Optional
/>
```

### SocialProof
Customer testimonials and reviews.

```tsx
<SocialProof
  title="Custom title" // Optional
  subtitle="Custom subtitle" // Optional
  reviews={customReviews} // Optional, uses default reviews
  showStars={true} // Optional, defaults to true
  className="additional-classes" // Optional
/>
```

### BookiePlusSection
Promotes the premium tier with features grid.

```tsx
<BookiePlusSection
  title="Custom title" // Optional
  subtitle="Custom badge text" // Optional
  description="Custom description" // Optional
  features={customFeatures} // Optional
  image={{ // Optional
    src: "/custom-image.png",
    alt: "Alt text"
  }}
  ctaText="Custom CTA" // Optional
  ctaHref="/custom-link" // Optional
  className="additional-classes" // Optional
/>
```

### FAQSection
Collapsible FAQ items.

```tsx
<FAQSection
  title="Custom title" // Optional
  subtitle="Custom subtitle" // Optional
  badge="Custom badge" // Optional
  faqs={customFAQs} // Optional, uses default FAQs
  supportLinkText="Support" // Optional
  supportLinkHref="/support" // Optional
  className="additional-classes" // Optional
/>
```

## Creating New Landing Pages

1. Create a new directory under `src/app/landing/[page-name]/`
2. Add a `page.tsx` file
3. Import the components you need
4. Customize the props for your target audience
5. Add appropriate metadata for SEO

## Example Landing Pages

### Main Homepage (`/`)
The default homepage using all components with standard messaging.

### Book Lovers (`/landing/book-lovers/`)
Targets passionate readers with emotional messaging about literary journeys.

### Goodreads Alternative (`/landing/goodreads-alternative/`)  
Targets users looking to switch from Goodreads with privacy and feature comparisons.

## SEO Best Practices

- Customize the `metadata` export for each landing page
- Use different keywords in headlines and subheadlines
- Tailor the benefits and social proof to your target audience
- Consider different images for different audiences
- Test different CTA copy

## Adding Custom Content

You can override default content by passing custom props:

```tsx
const customBenefits = [
  {
    title: "Custom benefit",
    desc: "Description of the benefit",
    icon: <YourIcon />
  }
];

<Benefits items={customBenefits} />
```

This allows you to create highly targeted landing pages while maintaining design consistency.