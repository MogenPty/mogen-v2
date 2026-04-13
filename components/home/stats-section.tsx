"use client";

import {
  LightningIcon,
  MedalIcon,
  StarIcon,
  UsersIcon,
} from "@phosphor-icons/react";

export default function StatsSection() {
  const stats = [
    {
      icon: UsersIcon,
      label: "HAPPY CLIENTS",
      value: "50+",
      color: "bg-blue-600",
    },
    {
      icon: LightningIcon,
      label: "PROJECTS DONE",
      value: "120+",
      color: "bg-purple-500",
    },
    {
      icon: StarIcon,
      label: "AVERAGE RATING",
      value: "4.9",
      color: "bg-lime-400",
    },
    {
      icon: MedalIcon,
      label: "YEARS EXPERIENCE",
      value: "25+",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div
                className={`${stat.color} w-20 h-20 mx-auto mb-4 neo-brutalist-border neo-brutalist-shadow flex items-center justify-center transform ${index % 2 === 0 ? "rotate-3" : "-rotate-3"}`}
              >
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 font-bold text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
