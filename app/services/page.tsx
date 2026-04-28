import type { Metadata } from "next";
import ServicesActions from "@/components/service/actions";
import ServicesHeader from "@/components/service/services-header";
import ServicesList from "@/components/service/services-list";
import { BASE_KEYWORDS } from "@/data/seo";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MOGEN offers web development, mobile app development, brand identity, and digital marketing services for South African businesses. Fast delivery, affordable rates.",
  keywords: [
    "web development services south africa",
    "mobile app development pretoria",
    "brand identity design south africa",
    "digital marketing services pretoria",
    "full stack development south africa",
    "website design agency gauteng",
    "branding agency pretoria",
    "SEO services south africa",
    ...BASE_KEYWORDS,
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
    type: "website",
  },
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader />
        <ServicesList />
        <ServicesActions />
      </div>
    </section>
  );
}
