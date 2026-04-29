import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/faq";
import { BASE_KEYWORDS } from "@/data/seo";
import { createPageUrl } from "@/lib/utils";

export const metadata = {
  title: "FAQ | MOGEN - Pretoria-Based Digital Innovation Agency",
  description:
    "Contact MOGEN for web development, digital marketing, and software solutions in South Africa.",
  keywords: [
    "faq",
    "frequently asked questions",
    "questions and answers",
    "still have questions",
    "help centre",
    ...BASE_KEYWORDS,
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    url: "/faq",
    type: "website",
  },
};

export default function FAQ() {
  return (
    <div className="bg-gray-50 py-20 mx-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-blue-600 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform -rotate-1 mb-6">
            HELP CENTRE
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="block transform rotate-1">QUESTIONS?</span>
            <span className="block text-purple-500 transform -rotate-1">
              WE HAVE
            </span>
            <span className="block text-lime-500 transform rotate-1">
              ANSWERS.
            </span>
          </h1>
        </div>

        {/* Accordion */}
        <div className="space-y-8">
          {faqs.map((section, index) => (
            <div
              key={section.category}
              className={`bg-white p-6 neo-brutalist-border neo-brutalist-shadow transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              <h2
                className={`inline-block ${section.color} text-white font-black text-xl px-4 py-2 neo-brutalist-border-thin mb-4`}
              >
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((item, idx) => (
                  <AccordionItem
                    value={`section-${index}-item-${idx}`}
                    key={item.q}
                    className="neo-brutalist-border-thin mb-2 bg-gray-50 p-2 border-b-2 last:border-b-2"
                  >
                    <AccordionTrigger className="text-left font-black text-lg hover:no-underline px-4 hover:cursor-pointer">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-bold text-gray-700 px-4 pt-2">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-20">
          <div className="bg-black text-white p-12 neo-brutalist-border neo-brutalist-shadow transform -rotate-1 text-center">
            <h2 className="text-4xl font-black mb-4 text-lime-400">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="text-xl font-bold mb-8 text-gray-300">
              Our team is ready to help. Get in touch for a free, no-obligation
              consultation.
            </p>
            <Link href={createPageUrl("Contact")}>
              <Button className="bg-purple-500 hover:cursor-pointer text-white font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-purple-600 transform hover:scale-105 transition-all duration-200">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
