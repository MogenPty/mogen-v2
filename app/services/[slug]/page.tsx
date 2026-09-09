import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServiceDetails from "@/components/service/service-details";
import ServiceHeader from "@/components/service/service-header";
import BackLink from "@/components/shared/back-link";
import Technologies from "@/components/shared/technologies";
import TestimonialBlock from "@/components/shared/testimonial-block";
import { SERVICE_DESCRIPTIONS } from "@/data/seo";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service)
    return {
      title: "Service Not Found",
      description: "No requested service cannot be found",
      robots: {
        index: false,
        follow: false,
      },
    };

  return {
    title: service.seo.title ?? service.seoTitle ?? service.title,
    description:
      service.seo.description ??
      SERVICE_DESCRIPTIONS[service.slug] ??
      service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function Service({ params }: Readonly<Props>) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const _testimonials = testimonials[slug];

  return (
    <div className="pt-12 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <BackLink text="Back to Services" link="/services" />

        {/* Project Header */}
        <ServiceHeader
          title={service.title}
          overview={service.overview}
          category={service.category}
          color={service.color}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <ServiceDetails
            title={service.title}
            content={service.content}
            description={service.description}
            image={service.image}
            packages={service.packages}
            gallery={service.gallery}
            cta={service.cta}
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

            {/* Testimonials */}
            {_testimonials && (
              <div className="grid grid-row-1 md:grid-row-3 gap-8">
                {_testimonials.map((testimonial, index) => (
                  <TestimonialBlock
                    key={`${testimonial.content.slice(0, 15)}_${index}`}
                    testimony={testimonial.content}
                    rating={testimonial.rating}
                    color={testimonial.color}
                    author={testimonial.author}
                    business={testimonial.business}
                    className={`${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                  />
                ))}
              </div>
            )}

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
