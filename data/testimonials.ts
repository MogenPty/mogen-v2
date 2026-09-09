export interface Testimonial {
  content: string;
  author?: string;
  business?: string;
  rating?: number;
  color?: string;
}

export const testimonials: Record<string, Testimonial[]> = {
  "web-development": [
    {
      author: "THABO MOLEFE",
      business: "Molefe Plumbing Services",
      content:
        "Mogen built us an amazing website that brings in new customers every week. Professional, fast, and affordable!",
      rating: 4,
      color: "bg-blue-600",
    },
    {
      author: "NOMSA DLAMINI",
      business: "Community Care NGO",
      content:
        "They understood our mission and created a website that perfectly represents our work. Donations have increased significantly.",
      rating: 5,
      color: "bg-purple-500",
    },
    {
      author: "SIPHO NKOSI",
      business: "InnovateSA Startup",
      content:
        "The team delivered exactly what we needed - a modern, professional site that converts visitors into leads.",
      rating: 5,
      color: "bg-lime-400",
    },
  ],
};
