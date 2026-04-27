import { redirect } from "next/navigation";
import ServiceDetails from "@/components/service/service-details";
import ServiceHeader from "@/components/service/service-header";
import BackLink from "@/components/shared/back-link";
import Technologies from "@/components/shared/technologies";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Service({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    redirect("/services");
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <BackLink text="Back to Services" link="/services" />

        {/* Project Header */}
        <ServiceHeader service={service} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <ServiceDetails
            title={service.title}
            description={service.description}
            image={service.image}
            gallery={service.gallery}
          />

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            {/* <ProjectInfo
              projectCategory={project.category}
              projectTimeline={project.timeline}
              projectYear={project.year}
            /> */}

            {/* Technologies */}
            <Technologies
              title="Methodologies"
              technologies={service.technologies}
            />

            {/* Action Buttons */}
            {/* <ProjectActions
              clientUrl={project.clientUrl}
              liveUrl={project.liveUrl}
            /> */}
          </div>
        </div>

        {/* CTA Section */}
        {/* <PortfolioCTA /> */}
      </div>
    </div>
  );
}
