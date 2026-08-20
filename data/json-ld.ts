import { services } from "./services";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.mogen.co.za/#organization",
  name: "Mogen Pty Ltd",
  legalName: "Motsoane Global Enterprise Pty Ltd",
  alternateName: "MOGEN Pty Ltd",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
  image: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`,
  description:
    "Full-stack web development, branding & digital marketing for South African businesses. Fast delivery, affordable pricing.",
  telephone: "+27765207876",
  email: "info@mogen.co.za",
  foundingDate: "2014", // ← update to your actual founding year
  currenciesAccepted: "ZAR",
  paymentAccepted: "Cash, EFT, Bank Transfer",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Maboloka",
      postalCode: "0164",
      addressRegion: "North West",
      addressCountry: "ZA",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Soshanguve",
      postalCode: "0152",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
  ],
  areaServed: [
    "Maboloka",
    "Letlhabile",
    "Letlhakaneng",
    "Jericho",
    "Soshanguve",
    "Kgabalatsane",
    "Mabopane",
    "Ga-Rankuwa",
    "Brits",
    "Pretoria",
    "North West",
    "Gauteng",
    "South Africa",
  ],
  serviceType: [...services.map((s) => s.title)],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "By Appointment",
    },
  ],
  sameAs: [
    "https://twitter.com/MogenPty",
    "https://x.com/MogenPty",
    "https://instagram.com/MogenPty",
    "https://www.linkedin.com/in/MogenPty",

    // add Facebook, LinkedIn URLs here when available
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27765207876",
    contactType: "customer service",
    areaServed: "ZA",
    availableLanguage: ["English", "Setswana", "Sesotho"],
  },
};
