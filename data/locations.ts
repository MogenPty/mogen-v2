export interface LocationData {
  slug: string;
  name: string;
  displayName: string;
  region: string;
  province: string;
  postalCode: string;
  streetAddress: string;
  country: string;
  coordinates: { latitude: string; longitude: string };
  telephone: string;
  email: string;
  // SEO
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  whyTitle: string;
  whyPoints: string[];
  areasServed: string[];
  services: string[]; // slugs of services offered here
}

export const locations: LocationData[] = [
  {
    slug: "brits",
    name: "Brits",
    displayName: "Brits",
    region: "North West",
    province: "North West",
    postalCode: "0250",
    streetAddress: "Brits Central",
    country: "ZA",
    coordinates: { latitude: "-25.632", longitude: "27.778" },
    telephone: "+27765207876",
    email: "info@mogen.co.za",
    seoTitle: "Website Design Brits | Web Development North West | Mogen Pty Ltd",
    seoDescription:
      "Custom websites for Brits businesses. Affordable web design, branding and SEO for Brits, Maboloka, Letlhabile and North West. Free quote in 24 hours.",
    heroTitle: "Website Design Brits",
    heroSubtitle: "Your Local Digital Partners in Brits & North West",
    intro:
      "Expanding from Tambo Section, Maboloka — we now serve Brits and surrounding North West communities with the same affordable, professional service. We build fast, mobile-friendly sites that work on South African networks and help you get more calls and WhatsApp enquiries from Brits, Letlhabile, Jericho and beyond.",
    whyTitle: "Why Choose a Local Agency in Brits?",
    whyPoints: [
      "North West based — we understand Brits, Maboloka and Letlhabile",
      "We know mobile data costs, load-shedding and local search behaviour",
      "Fixed-price proposals within 24 hours, no hidden fees",
      "Mobile-first sites built with Next.js, Tailwind and modern tech",
    ],
    areasServed: ["Brits", "Maboloka", "Letlhabile", "Letlhakaneng", "Jericho", "Garankuwa", "Hartbeespoort"],
    services: ["web-development", "brand-identity", "digital-marketing", "seo"],
  },
  {
    slug: "maboloka",
    name: "Maboloka",
    displayName: "Maboloka",
    region: "North West",
    province: "North West",
    postalCode: "0197",
    streetAddress: "Tambo Section",
    country: "ZA",
    coordinates: { latitude: "-25.467", longitude: "27.871" },
    telephone: "+27765207876",
    email: "info@mogen.co.za",
    seoTitle: "Website Design Maboloka | Local Web Experts | Mogen Pty Ltd",
    seoDescription:
      "Custom websites for Maboloka businesses. Fast delivery, affordable rates, WhatsApp booking systems. Based in Tambo Section, Maboloka. Free quote today.",
    heroTitle: "Website Design Maboloka",
    heroSubtitle: "Your Local Digital Partners in Maboloka",
    intro:
      "MOGEN is based in Tambo Section, Maboloka. We started with one clear goal: make professional digital services affordable and accessible for local businesses that are often overlooked by big-city agencies. We build websites that work on mobile data, load quickly, and help you get more calls and WhatsApp messages from customers in Maboloka, Letlhabile, Brits and beyond.",
    whyTitle: "Why Choose a Local Agency in Maboloka?",
    whyPoints: [
      "We are here — meet us in Tambo Section, call or WhatsApp for a real response",
      "We understand load-shedding, mobile data costs, and how local customers search",
      "Fixed-price proposals within 24 hours, no hidden fees",
      "Mobile-first sites that load fast on South African networks",
    ],
    areasServed: ["Maboloka", "Letlhabile", "Letlhakaneng", "Jericho", "Brits", "Garankuwa", "Soshanguve"],
    services: ["web-development", "brand-identity", "digital-marketing", "seo"],
  },
  {
    slug: "pretoria",
    name: "Pretoria",
    displayName: "Pretoria",
    region: "Gauteng",
    province: "Gauteng",
    postalCode: "0002",
    streetAddress: "Pretoria Central",
    country: "ZA",
    coordinates: { latitude: "-25.747", longitude: "28.229" },
    telephone: "+27765207876",
    email: "info@mogen.co.za",
    seoTitle: "Website Development Pretoria & Tshwane | Affordable Web Design | Mogen",
    seoDescription:
      "Web design and development for Pretoria businesses. Serving Soshanguve, Mabopane, Ga-Rankuwa, Centurion and wider Tshwane. Packages from R2,999.",
    heroTitle: "Website Development Pretoria & Tshwane",
    heroSubtitle: "Serving the Whole of Tshwane",
    intro:
      "Although we are proudly based in Soshanguve and Maboloka, we work with clients throughout Pretoria, Centurion, Pretoria North, Pretoria East, Mabopane, Ga-Rankuwa and surrounding areas. We specialise in practical, conversion-focused websites for small and medium businesses that want to look professional without paying Johannesburg agency prices.",
    whyTitle: "Why Pretoria Businesses Choose MOGEN",
    whyPoints: [
      "Transparent pricing — packages from R2,999",
      "Fast turnaround — most sites live in 7–14 days",
      "Mobile-first — critical for South African users",
      "Local understanding + modern tech (Next.js, Flutter)",
      "Clear communication and no jargon",
    ],
    areasServed: ["Pretoria", "Centurion", "Pretoria North", "Pretoria East", "Mabopane", "Ga-Rankuwa", "Soshanguve", "Akasia", "Tshwane"],
    services: ["web-development", "seo"],
  },
  {
    slug: "soshanguve",
    name: "Soshanguve",
    displayName: "Soshanguve",
    region: "Gauteng",
    province: "Gauteng",
    postalCode: "0152",
    streetAddress: "Block Y",
    country: "ZA",
    coordinates: { latitude: "-25.518", longitude: "28.104" },
    telephone: "+27765207876",
    email: "info@mogen.co.za",
    seoTitle: "Web Design Soshanguve | Affordable Websites for Local Businesses | Mogen",
    seoDescription:
      "Professional website design for Soshanguve businesses. Mobile-friendly sites from R2,999. Local agency based in Block Y, Soshanguve. Free quote in 24 hours.",
    heroTitle: "Web Design Soshanguve",
    heroSubtitle: "Local Web Experts Who Understand Soshanguve",
    intro:
      "We are based in Block Y, Soshanguve. We know the area, the challenges local businesses face, and how customers in Tshwane actually search for services — mostly on their phones. Whether you run a plumbing business, medical practice, spaza, salon, transport company or professional service, a clean website helps you look established and makes it easy for customers to contact you.",
    whyTitle: "Why Soshanguve Businesses Need a Proper Website",
    whyPoints: [
      "Customers search on Google before they call or WhatsApp",
      "A website works even when you are busy with jobs",
      "It builds trust faster than a Facebook page alone",
      "Show your work, prices and contact details clearly",
      "Supports your Google Business Profile and local search visibility",
    ],
    areasServed: ["Soshanguve", "Mabopane", "Ga-Rankuwa", "Pretoria North", "Akasia", "Tshwane"],
    services: ["web-development", "seo"],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function isServiceOfferedAt(locationSlug: string, serviceSlug: string) {
  const loc = getLocation(locationSlug);
  if (!loc) return false;
  return loc.services.includes(serviceSlug);
}

export function getLocationServiceCombos() {
  return locations.flatMap((loc) =>
    loc.services.map((service) => ({ location: loc.slug, service }))
  );
}
