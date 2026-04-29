export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
  fullDescription: string;
  scope: string[];
  technologies: string[];
  timeline: string;
  year: string;
  gallery: string[];
  clientUrl?: string;
  liveUrl?: string;
  tags?: string[];
}

// const categories = ["All", "Local Business", "NGO", "Startup", "Professional"];
const categories = [
  {
    name: "All",
    color: "bg-white",
  },
  {
    name: "FinTech",
    color: "bg-emerald-600",
  },
  {
    name: "Healthcare",
    color: "bg-green-600",
  },
  {
    name: "Local Business",
    color: "bg-blue-600",
  },
  {
    name: "NGO",
    color: "bg-purple-500",
  },
  {
    name: "Professional",
    color: "bg-orange-500",
  },
  {
    name: "Startup",
    color: "bg-lime-400",
  },
];

const portfolioItems: Project[] = [
  {
    id: 1,
    slug: "molefe-plumbing",
    title: "MOLEFE PLUMBING",
    category: "Local Business",
    description:
      "Modern website with WhatsApp booking and customer testimonials",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
    color: "bg-blue-600",
    fullDescription:
      "A comprehensive plumbing services website designed to showcase professional expertise and make it easy for customers to book appointments through WhatsApp integration.",
    scope: [
      "Website Design",
      "WhatsApp Integration",
      "Customer Testimonials",
      "Mobile Optimization",
    ],
    tags: [
      "molefe plumbing",
      "plumbing website",
      "whatsapp integration",
      "customer testimonials",
      "mobile optimisation",
      "whatsapp booking",
      "local trades",
      "small business website",
    ],
    technologies: ["React", "Tailwind CSS", "WhatsApp Business API"],
    timeline: "2 weeks",
    year: "2024",
    // liveUrl: "https://example.com/molefe-plumbing",
    // clientUrl: "/showcase/molefe-plumbing",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581094271901-734744ca2ca2?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    slug: "lighters-of-the-world",
    title: "Lighters of the World",
    category: "NGO",
    description:
      "Warm, inviting site with donation system and volunteer portal",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    color: "bg-purple-500",
    fullDescription:
      "A heartwarming non-profit organisation website that connects volunteers with meaningful opportunities and facilitates secure donations for community development projects.",
    scope: [
      "Website Design",
      "Donation System",
      "Volunteer Portal",
      "Content Management",
    ],
    technologies: ["React", "Tailwind CSS", "Stripe API", "Firebase"],
    timeline: "3 weeks",
    year: "2024",
    // liveUrl: "https://example.com/lotwo",
    // clientUrl: "/showcase/lotwo",
    gallery: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    slug: "techstart-sa",
    title: "TECHSTART SA",
    category: "Startup",
    description:
      "Bold landing page with lead capture and analytics integration",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    color: "bg-lime-400",
    fullDescription:
      "A cutting-edge startup landing page designed to capture leads and showcase innovative technology solutions with integrated analytics for conversion tracking.",
    scope: [
      "Landing Page Design",
      "Lead Capture System",
      "Analytics Integration",
      "A/B Testing",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Google Analytics",
      "Mailchimp API",
    ],
    timeline: "1 week",
    year: "2024",
    // liveUrl: "https://example.com/techstart",
    // clientUrl: "/clients/techstart-sa",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    slug: "dr-mahlangu",
    title: "DR. MAHLANGU",
    category: "Healthcare",
    description:
      "Professional medical practice website with appointment booking",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    color: "bg-green-600",
    fullDescription:
      "A sophisticated medical practice website that builds trust with patients through professional design, easy appointment booking, and comprehensive service information.",
    scope: [
      "Website Design",
      "Appointment System",
      "Patient Portal",
      "Medical Information",
    ],
    technologies: ["React", "Tailwind CSS", "Calendar API", "HIPAA Compliance"],
    timeline: "3 weeks",
    year: "2024",
    // liveUrl: "https://example.com/dr-mahlangu",
    clientUrl: "/showcase/dr-mahlangu",
    gallery: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 5,
    slug: "dr-nkosi-practice",
    title: "DR. NKOSI PRACTICE",
    category: "Professional",
    description:
      "Calm, professional site with an easy-to-use appointment request form",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    color: "bg-orange-500",
    fullDescription:
      "A serene and professional medical practice website designed to instill confidence in patients while making appointment scheduling seamless and stress-free.",
    scope: [
      "Website Design",
      "Appointment System",
      "Patient Information",
      "Professional Branding",
    ],
    technologies: ["React", "Tailwind CSS", "Calendar API", "Form Validation"],
    timeline: "2 weeks",
    year: "2024",
    // liveUrl: "https://example.com/dr-nkosi",
    clientUrl: "/showcase/dr-nkosi-practice",
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757594-17eb7d5a6633?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 6,
    slug: "nix-mapha-eats",
    title: "NIX MAPHA EATS",
    category: "Local Business",
    description: "Vibrant food delivery landing page with online ordering",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    color: "bg-purple-500",
    fullDescription:
      "A colorful and appetizing food delivery platform that makes ordering local favorites easy and enjoyable, featuring vibrant imagery and smooth user experience.",
    scope: [
      "Website Design",
      "Online Ordering",
      "Menu Display",
      "Delivery Integration",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Payment Gateway",
      "Order Management",
    ],
    timeline: "3 weeks",
    year: "2024",
    // liveUrl: "https://example.com/nix-mapha-eats",
    // clientUrl: "/clients/nix-mapha-eats",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 7,
    slug: "future-coders",
    title: "FUTURE CODERS",
    category: "NGO",
    description:
      "An educational platform for young developers in the community",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&h=400&fit=crop",
    color: "bg-blue-600",
    fullDescription:
      "An inspiring educational platform dedicated to empowering young developers in underserved communities with coding skills, mentorship, and career opportunities.",
    scope: [
      "Website Design",
      "Learning Platform",
      "Community Features",
      "Resource Library",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Learning Management",
      "Community Portal",
    ],
    timeline: "4 weeks",
    year: "2024",
    // liveUrl: "https://futurecoders.org",
    // clientUrl: "/clients/future-coders",
    gallery: [
      "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 8,
    slug: "townshippay",
    title: "TOWNSHIPPAY",
    category: "FinTech",
    description: "Secure digital payment platform for township businesses",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    color: "bg-emerald-600",
    fullDescription:
      "A revolutionary fintech platform that brings secure digital payments to township businesses, enabling cashless transactions and financial inclusion for underserved communities.",
    scope: [
      "Platform Design",
      "Payment Gateway",
      "Security Implementation",
      "Mobile Optimization",
    ],
    technologies: [
      "React",
      "Node.js",
      "Blockchain",
      "Payment APIs",
      "Security Protocols",
    ],
    timeline: "6 weeks",
    year: "2024",
    // liveUrl: "https://townshippay.co.za",
    clientUrl: "/showcase/townshippay",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    ],
  },
];

export { categories, portfolioItems };
