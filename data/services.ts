import { packages } from "./pricing";
import { testimonials } from "./testimonials";

export const services = [
  {
    icon: "CodeIcon",
    title: "WEB DEVELOPMENT",
    slug: "web-development",
    category: "Development",
    seoTitle: "Website Development from R2,999",
    seo: {
      title:
        "Website Development from R2,999 - Fast, Mobile-Friendly Sites for Local Businesses",
      description:
        "Custom websites built for Maboloka, Soshanguve & Pretoria businesses. Mobile-first, fast-loading, SEO-ready sites from R2,999. Free quote in 24 hours.",
    },
    description:
      "Custom websites that work perfectly on all devices. Fast, secure, and built to convert visitors into customers.",
    overview:
      "Custom websites that work perfectly on all devices. Fast, secure, and built to convert visitors into customers.",
    content: `<h2 class="text-3xl font-black text-black-400 uppercase">Why Local Businesses Choose MOGEN for Website Development</h2>
    <p>Most small businesses in Maboloka, Soshanguve and surrounding areas still rely on WhatsApp status updates or Facebook pages. A proper website changes that. It works 24/7, builds trust, and brings in customers who are already searching for your services.</p>
    <p>We build clean, modern websites that load fast on mobile data, look professional on any phone, and are easy for Google to understand.</p>
    <h2 class="text-3xl font-black text-black-400 uppercase mt-6">What's Included in Every Website</h2>
    <ul style="list-style: square inside;">
      <li>Fully custom design (no generic templates)</li>
      <li>Mobile-first responsive layout</li>
      <li>Contact forms + WhatsApp click-to-chat</li>
      <li>SEO setup on Professional and Premium plans</li>
      <li>Google Analytics & Search Console setup on the Premium plan</li>      <li>SSL certificate & secure hosting guidance</li>
      <li>1-6 months free support (depending on package)</li>
    </ul>
    <h2 class="text-3xl font-black text-black-400 uppercase mt-6">Our Process (Simple & Transparent)</h2>
    <ol style="list-style: decimal-leading-zero inside;">
      <li><strong>Discovery call</strong> - We learn about your business, customers and goals (free).</li>
      <li><strong>Proposal & quote</strong> - Clear scope and fixed price within 24 hours.</li>
      <li><strong>Design & content</strong> - You approve the look and feel before we build.</li>
      <li><strong>Development</strong> - We build, test on real phones, and optimise for speed.</li>
      <li><strong>Launch & training</strong> - We go live and show you how to make small updates.</li>
      <li><strong>Support</strong> - We stay available for the agreed support period.</li>
    </ol>`,
    packages,
    testimonials: testimonials["web-development"],
    color: "bg-blue-600",
    borderColor: "border-blue-600",
    technologies: [
      "React, NextJS, Vite",
      "AstroJS",
      "AngularJS, Angular 2+",
      "PHP",
      "Javascript/TypeScript",
      "NeonDB, Supabase, MongoDB",
      "MySql, MariaDB",
      "Vercel, Netlify",
      "Cloudinary, Cloudflare",
    ],
    image: "",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=341&h=184&fit=crop",
      "https://images.unsplash.com/photo-1581094271901-734744ca2ca2?w=341&h=184&fit=crop",
    ],
    cta: {
      title: "Ready to Get Online?",
      subtitle: "Get a free, no-obligation quote in 24 hours.",
      textColor: "text-blue-600",
    },
  },
  {
    icon: "DeviceMobileIcon",
    title: "MOBILE DEVELOPMENT",
    slug: "mobile-development",
    category: "Development",
    seoTitle: "Mobile App Development South Africa",
    description:
      "Custom mobile apps that work perfectly on all devices. Fast, secure, and built to feel native on any mobile device.",
    seo: {
      title: "",
      description: "",
    },
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    technologies: ["Flutter", "React Native"],
    image: "",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=341&h=184&fit=crop",
      "https://images.unsplash.com/photo-1581094271901-734744ca2ca2?w=341&h=184&fit=crop",
    ],
  },
  {
    icon: "PaletteIcon",
    title: "BRAND IDENTITY",
    slug: "brand-identity",
    category: "Branding",
    seoTitle: "Logo & Brand Identity Design",
    description:
      "Logos, colors, and visual systems that make your business unforgettable. Stand out from the competition.",
    seo: {
      title: "Logo & Brand Identity Design for Local Businesses | Mogen",
      description:
        "Professional logos, colour systems and brand guidelines for Maboloka, Soshanguve and Pretoria businesses. Make your business look established and trustworthy.",
    },
    content: ``,
    color: "bg-purple-500",
    borderColor: "border-pink-500",
    technologies: ["Logo Design", "Letterhead Design", "Email Signature"],
  },
  {
    icon: "MegaphoneIcon",
    title: "DIGITAL MARKETING",
    slug: "digital-marketing",
    category: "Marketing",
    seoTitle: "Digital Marketing & SEO Services",
    description:
      "Get found online with SEO, social media, and content that actually brings in new customers.",
    seo: {
      title: "",
      description: "",
    },
    color: "bg-lime-400",
    iconColor: "text-white",
    borderColor: "border-lime-400",
    technologies: ["Social Media", "Tailwind CSS", "WhatsApp Business API"],
  },
  {
    icon: "MagnifyingGlassIcon",
    title: "SEO SERVICES",
    slug: "seo",
    category: "Marketing",
    seoTitle:
      "SEO Services South Africa | Local SEO for Small Businesses | Mogen",
    description:
      "Local SEO that gets you found on Google. Google Business Profile, on-page optimisation and content that brings real enquiries from nearby customers.",
    seo: {
      title: "",
      description: "",
    },
    content: `<h2 class="text-3xl font-black text-black-400 uppercase">Local SEO That Brings Real Customers</h2>
    <p>Having a website is only half the job. If your Google Business Profile is incomplete or your site doesn't signal where you work, you are invisible to customers searching "plumber near me" or "web design Soshanguve".</p>
    <p>We focus on practical local SEO for small businesses in Maboloka, Soshanguve and Tshwane — not vanity rankings.</p>
    <h2 class="text-3xl font-black text-black-400 uppercase mt-6">What's Included</h2>
    <ul style="list-style: square inside;">
      <li>Google Business Profile setup & optimisation</li>
      <li>Local keyword research for your area + services</li>
      <li>On-page SEO (titles, headings, internal linking)</li>
      <li>Local citations & NAP consistency</li>
      <li>Review strategy to build trust</li>
      <li>Monthly report showing calls, views and rankings</li>
    </ul>
    <h2 class="text-3xl font-black text-black-400 uppercase mt-6">How We Work</h2>
    <p>We don't promise overnight #1 rankings. We build sustainable visibility that compounds. Every action is tied to enquiries — more calls and WhatsApps, not just impressions.</p>`,
    color: "bg-emerald-500",
    borderColor: "border-emerald-500",
    technologies: [
      "Google Business Profile",
      "Local SEO",
      "On-Page SEO",
      "Analytics",
    ],
  },
];
