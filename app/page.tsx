import CTASection from "@/components/home/cta-section";
import HeroSection from "@/components/home/hero-section";
import PortfolioSection from "@/components/home/portfolio-section";
import ServicesSection from "@/components/home/services-section";
import StatsSection from "@/components/home/stats-section";
import TestimonialsSection from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
