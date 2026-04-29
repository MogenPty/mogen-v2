export interface Package {
  name: string;
  price: string;
  description: string;
  foreColor?: string;
  backgroundColor?: string;
  popular: boolean;
  features: string[];
}

const packages = [
  {
    name: "STARTER",
    price: "R2,999",
    description: "Perfect for small businesses getting started online",
    backgroundColor: "bg-blue-600",
    popular: false,
    features: [
      "5-page custom website",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 month support",
    ],
  },
  {
    name: "PROFESSIONAL",
    price: "R8,999",
    description: "Most popular choice for growing businesses",
    backgroundColor: "bg-purple-500",
    popular: true,
    features: [
      "10-page custom website",
      "Professional design",
      "Online booking system",
      "Advanced SEO",
      "Social media integration",
      "3 months support",
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
      "Unlimited pages",
      "Custom functionality",
      "E-commerce ready",
      "Analytics setup",
      "Content management",
      "Brand identity package",
      "6 months support",
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
