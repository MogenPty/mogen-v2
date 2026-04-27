"use client";

import { CalendarIcon, ClockIcon, UsersIcon } from "@phosphor-icons/react";

interface ProjectInfoProps {
  projectCategory: string;
  projectYear: string;
  projectTimeline: string;
}

export default function ProjectInfo({
  projectCategory,
  projectTimeline,
  projectYear,
}: ProjectInfoProps) {
  return (
    <div className="bg-white p-8 neo-brutalist-border neo-brutalist-shadow">
      <h3 className="text-2xl font-black mb-6">PROJECT INFO</h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <CalendarIcon className="w-5 h-5 text-blue-600" />
          <div>
            <div className="font-black text-sm">YEAR</div>
            <div className="text-gray-600">{projectYear}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ClockIcon className="w-5 h-5 text-purple-600" />
          <div>
            <div className="font-black text-sm">TIMELINE</div>
            <div className="text-gray-600">{projectTimeline}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <UsersIcon className="w-5 h-5 text-lime-600" />
          <div>
            <div className="font-black text-sm">CATEGORY</div>
            <div className="text-gray-600">{projectCategory}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
