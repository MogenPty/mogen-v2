export interface Article {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags?: string[];
  featuredImage?: string;
  status?: string;
  category?: string;
}

// Sample articles data
export const sampleArticles: Article[] = [
  {
    title: "The Future of Web Development in South Africa",
    slug: "the-future-of-web-development-in-south-africa",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## Key Points

1. **Local Market Growth**: The South African web development market is expanding rapidly
2. **Technology Adoption**: New frameworks and technologies are being adopted faster
3. **Skills Development**: There's a growing need for skilled developers

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    excerpt:
      "Exploring the growing web development landscape in South Africa and what it means for local businesses.",
    author: "MOGEN Team",
    tags: ["web development", "south africa", "technology"],
    featuredImage:
      "https://images.unsplash.com/photo-1585930437427-ac2efc8611a3?q=80&w=1170&auto=format&fit=crop",
    category: "Technology",
    publishedAt: "2024-05-15T10:00:00Z",
    status: "published",
  },
  {
    title: "Building Better Websites for Local Businesses",
    slug: "building-better-websites-for-local-businesses",
    content: `Creating effective websites for local businesses requires understanding their unique needs and challenges.

## Understanding Local Business Needs

Local businesses often have different requirements compared to global enterprises:

- **Community Focus**: Websites should reflect local community values
- **Mobile-First**: Most customers will access sites on mobile devices
- **Local SEO**: Visibility in local search results is crucial

## Best Practices

### Design Principles
- Keep it simple and clean
- Use high-quality local imagery
- Ensure fast loading times

### Content Strategy
- Highlight local connections
- Include customer testimonials
- Provide clear contact information

The key is to create websites that truly serve the local community while maintaining professional standards.`,
    excerpt:
      "A guide to creating effective websites that serve local business needs and connect with their communities.",
    author: "MOGEN Team",
    tags: ["local business", "design", "web design", "best practices"],
    featuredImage:
      "https://images.unsplash.com/photo-1740042270192-eba648e0e8e2?q=80&w=910&auto=format&fit=crop",
    category: "Design",
    publishedAt: "2024-06-01T10:00:00Z",
    status: "published",
  },
  {
    title: "Why Every Maboloka Business Needs a Website",
    slug: "why-every-maboloka-business-needs-a-website",
    content: `In today's digital age, having a website is no longer optional for businesses in Maboloka and surrounding areas.

## The Digital Shift

The COVID-19 pandemic accelerated digital adoption across South Africa. Even small local businesses now need an online presence to:

- Reach customers who search online first
- Provide information outside business hours  
- Build credibility and trust
- Compete with larger businesses

## Local Success Stories

We've helped numerous Maboloka businesses transform their operations with professional websites:

- **Local Restaurants**: Online menus and ordering systems
- **Service Providers**: Booking systems and portfolios
- **Retail Stores**: Online catalogs and contact forms

## Getting Started

Building a website doesn't have to be overwhelming. Start with:

1. A simple, clean design
2. Essential business information
3. Contact details and location
4. Mobile-friendly layout

The investment in a professional website pays for itself through increased visibility and customer acquisition.`,
    excerpt:
      "Understanding why local businesses in Maboloka need websites and how they can benefit from having an online presence.",
    author: "MOGEN Team",
    tags: [
      "featured",
      "business",
      "maboloka",
      "local business",
      "digital presence",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=1469&auto=format&fit=crop",
    category: "Business",
    publishedAt: "2024-06-10T10:00:00Z",
    status: "published",
  },
];
