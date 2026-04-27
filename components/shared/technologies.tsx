"use client";

import { CodeIcon } from "@phosphor-icons/react";

interface Props {
  title: string;
  technologies: string[];
}

export default function Technologies({ title, technologies }: Props) {
  return (
    <div className="bg-gray-900 text-white p-8 neo-brutalist-border neo-brutalist-shadow">
      <h3 className="text-2xl font-black text-lime-400 mb-6">TECHNOLOGIES</h3>
      <div className="flex items-center gap-2 mb-4">
        <CodeIcon className="w-5 h-5 text-purple-400" />
        <span className="font-black">{title.toUpperCase()}</span>
      </div>
      <div className="space-y-2">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="bg-gray-800 px-4 py-2 neo-brutalist-border-thin font-bold"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
