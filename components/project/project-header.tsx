"use client";

interface ProjectHeaderProps {
  project: {
    title: string;
    category: string;
    fullDescription: string;
    color: string;
  };
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="mb-16">
      <div className="text-center">
        <div
          className={`${project.color} text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform rotate-1 mb-6`}
        >
          {project.category}
        </div>
        <h1 className="text-5xl lg:text-7xl font-black mb-6">
          <span className="block transform -rotate-1">{project.title}</span>
        </h1>
        <p className="text-2xl font-bold text-gray-600 max-w-3xl mx-auto leading-[1.4]">
          {project.fullDescription}
        </p>
      </div>
    </div>
  );
}
