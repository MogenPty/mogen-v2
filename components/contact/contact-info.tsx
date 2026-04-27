"use client";

import {
  ClockIcon,
  MailboxIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";

interface Props {
  phoneNumber?: string;
  whatsAppNumber?: string;
  whatsAppMessage?: string;
  emailAddress?: string;
  operationHours?: string;
}

export default function ContactInfo(props: Props) {
  return (
    <div className="bg-black text-white p-8 neo-brutalist-border neo-brutalist-shadow transform -rotate-1">
      <h2 className="text-3xl font-black text-lime-400 mb-6">CONTACT INFO</h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <PhoneIcon className="w-6 h-6 text-purple-500 mt-1" />
          <div>
            <div className="font-black text-lg">PHONE</div>
            <div className="text-gray-300">{props.phoneNumber}</div>
            <a
              href={`https://wa.me/${props.whatsAppNumber}?text=${props.whatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2"
            >
              <button
                type="button"
                className="bg-lime-400 text-black font-black px-4 py-2 rounded neo-brutalist-border neo-brutalist-shadow-sm hover:bg-lime-500 transition-all duration-200 flex items-center gap-2"
              >
                <span className="sr-only">WhatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-700"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c0-5.444 4.425-9.87 9.877-9.87 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.979c-.003 5.444-4.428 9.868-9.872 9.868zm8.413-18.282A11.815 11.815 0 0011.978 0C5.37 0 .002 5.367 0 11.974c0 2.114.552 4.174 1.601 5.991L.057 24l6.184-1.646a11.93 11.93 0 005.735 1.463h.005c6.606 0 11.974-5.367 11.978-11.972a11.89 11.89 0 00-3.497-8.49z" />
                </svg>
                Message on WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MailboxIcon className="w-6 h-6 text-lime-400 mt-1" />
          <div>
            <div className="font-black text-lg">EMAIL</div>
            <div className="text-gray-300">{props.emailAddress}</div>
            <div className="text-sm text-gray-400">24hr response time</div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPinIcon className="w-6 h-6 text-blue-400 mt-1" />
          <div>
            <div className="font-black text-lg">LOCATIONS</div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <div className="text-gray-300">
                  Tambo Section
                  <br />
                  Maboloka, 0197
                  <br />
                  North West
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-300">
                  Block Y, <br />
                  Soshanguve, 0152 <br />
                  Gauteng
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-400 mt-4">Serving all of SA</div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ClockIcon className="w-6 h-6 text-orange-400 mt-1" />
          <div>
            <div className="font-black text-lg">HOURS</div>
            <div className="text-gray-300">{props.operationHours}</div>
            <div className="text-sm text-gray-400">
              Weekend calls by appointment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
