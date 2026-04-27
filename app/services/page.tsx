import ServicesActions from "@/components/service/actions";
import ServicesHeader from "@/components/service/services-header";
import ServicesList from "@/components/service/services-list";

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
