import Link from "next/link";
import { services } from "@/data/services";
import ServiceIcon from "./service-icon";
import ButtonColored from "../shared/button-colored";

export default function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      {services.map((service, index) => {
        const servIcon = (
          <ServiceIcon icon={service.icon} color={service.iconColor} />
        );
        return (
          <Link href={`/services/${service.slug}`} key={service.title}>
            <div
              className={`bg-white p-8 neo-brutalist-border neo-brutalist-shadow transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`${service.color} w-16 h-16 mb-6 neo-brutalist-border neo-brutalist-shadow-sm flex items-center justify-center`}
              >
                {servIcon}
              </div>
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <p className="text-gray-600 font-bold mb-6">
                {service.description}
              </p>
              <ButtonColored
                backgroundColor={service.color}
                className="mt-4 w-full"
              >
                VIEW SERVICE
              </ButtonColored>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
