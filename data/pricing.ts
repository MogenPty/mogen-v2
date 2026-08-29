export type PackageFeatureValue = string | boolean;

export interface PackageFeature {
  label: string;
  value: PackageFeatureValue;
}

export interface Package {
  name: string;
  price: string;
  description: string;
  foreColor?: string;
  backgroundColor?: string;
  popular: boolean;
  features: (string | PackageFeature)[];
}

const packages: Package[] = [
  {
    name: "STARTER",
    price: "R2,999",
    description: "Perfect for small businesses getting started online",
    backgroundColor: "bg-blue-600",
    popular: false,
    features: [
      { label: "Number of pages", value: "5 pages" },
      { label: "Custom design", value: true },
      { label: "Mobile responsive", value: true },
      { label: "Contact form", value: true },
      { label: "WhatsApp integration", value: true },
      { label: "SEO setup", value: false },
      { label: "Online booking system", value: false },
      { label: "E-commerce", value: false },
      { label: "Analytics setup", value: false },
      { label: "Content management", value: false },
      { label: "Brand identity package", value: false },
      { label: "Social media integration", value: false },
      { label: "Support", value: "1 month" },
    ],
  },
  {
    name: "PROFESSIONAL",
    price: "R8,999",
    description: "Most popular choice for growing businesses",
    backgroundColor: "bg-purple-500",
    popular: true,
    features: [
      { label: "Number of pages", value: "10 pages" },
      { label: "Custom design", value: "Professional" },
      { label: "Mobile responsive", value: true },
      { label: "Contact form", value: true },
      { label: "WhatsApp integration", value: true },
      { label: "SEO setup", value: "Basic" },
      { label: "Online booking system", value: true },
      { label: "E-commerce", value: false },
      { label: "Analytics setup", value: false },
      { label: "Content management", value: false },
      { label: "Brand identity package", value: false },
      { label: "Social media integration", value: true },
      { label: "Support", value: "3 months" },
    ],
  },
  {
    name: "PREMIUM",
    price: "R14,999",
    description: "Complete solution for established businesses",
    foreColor: "text-black",
    backgroundColor: "bg-lime-400",
    popular: false,
    features: [
      { label: "Number of pages", value: "Unlimited" },
      { label: "Custom design", value: "Bespoke + functionality" },
      { label: "Mobile responsive", value: true },
      { label: "Contact form", value: true },
      { label: "WhatsApp integration", value: true },
      { label: "SEO setup", value: "Advanced" },
      { label: "Online booking system", value: true },
      { label: "E-commerce", value: true },
      { label: "Analytics setup", value: true },
      { label: "Content management", value: true },
      { label: "Brand identity package", value: true },
      { label: "Social media integration", value: true },
      { label: "Support", value: "6 months" },
    ],
  },
];

const addOns = [
  {
    name: "Analytics setup",
    price: "R2,000",
    features: ["Google Analytics integration", "Traffic Tracking setup"],
  },
  {
    name: "Google My Business setup",
    price: "R2,000",
    features: ["Profile creation", "Optimization for local search"],
  },
  {
    name: "E-commerce Setup",
    price: "R5,000",
    features: [
      "Product listings",
      "Payment gateway integration",
      "Shopping cart functionality",
    ],
  },
  {
    name: "Monthly SEO",
    price: "R3,000/month",
    features: [
      "Keyword optimization",
      "Monthly performance report",
      "Content recommendations",
    ],
  },
  {
    name: "Social Media Management",
    price: "R4,000/month",
    features: [
      "3 posts/week or 1 post/week on 3 social platforms",
      "Audience engagement",
      "Monthly reporting",
    ],
  },
  {
    name: "Website Maintenance",
    price: "R1,500/month",
    features: ["Regular updates", "Security monitoring", "Backups"],
  },
];

export { packages, addOns };
