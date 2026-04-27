import { redirect } from "next/navigation";

import PortfolioCTA from "@/components/portfolio/cta-section";

import ProjectActions from "@/components/project/actions";
import ProjectDetails from "@/components/project/details";
import ProjectHeader from "@/components/project/project-header";
import ProjectInfo from "@/components/project/project-info";
import BackLink from "@/components/shared/back-link";
import Technologies from "@/components/shared/technologies";

import portfolioItems from "@/data/portfolio";

interface PortfolioDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioDetail({
  params,
}: PortfolioDetailProps) {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    redirect("/portfolio");
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <BackLink text="Back to Portfolio" link="/portfolio" />

        {/* Project Header */}
        <ProjectHeader project={project} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <ProjectDetails
            description={project.fullDescription}
            gallery={project.gallery}
            image={project.image}
            scope={project.scope}
            title={project.title}
            liveUrl={project.liveUrl}
          />

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <ProjectInfo
              projectCategory={project.category}
              projectTimeline={project.timeline}
              projectYear={project.year}
            />

            {/* Technologies */}
            <Technologies
              title="Tech Stack"
              technologies={project.technologies}
            />

            {/* Action Buttons */}
            <ProjectActions
              clientUrl={project.clientUrl}
              liveUrl={project.liveUrl}
            />
          </div>
        </div>

        {/* CTA Section */}
        <PortfolioCTA />
      </div>
    </div>
  );
}
