"use client";

import Image from "next/image";
import { teamMembers } from "@/data/about";

export default function AboutTeam() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <h2 className="text-4xl font-black mb-12 text-center">MEET THE TEAM</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className={`bg-white p-6 neo-brutalist-border neo-brutalist-shadow transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} text-center`}
          >
            <div className="relative inline-block mb-4">
              <Image
                width={400}
                height={400}
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover neo-brutalist-border"
              />
              <div
                className={`absolute -bottom-2 -right-2 ${member.color} w-10 h-10 neo-brutalist-border rounded-full flex items-center justify-center text-white font-black text-lg`}
              >
                {member.name.charAt(0)}
              </div>
            </div>
            <h3 className="text-2xl font-black">{member.name}</h3>
            <p className={`font-bold ${member.color.replace("bg-", "text-")}`}>
              {member.role}
            </p>
            <p className="mt-4 text-gray-600 font-bold">{`"${member.bio}"`}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
