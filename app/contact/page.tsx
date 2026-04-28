import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import FreeResources from "@/components/contact/free-resources";
import ContactHeader from "@/components/contact/header";
import { BASE_KEYWORDS } from "@/data/seo";

export const metadata = {
  title: "Contact | MOGEN - Pretoria-Based Digital Innovation Agency",
  description:
    "Contact MOGEN for web development, digital marketing, and software solutions in South Africa.",
  keywords: [
    "contact",
    "call us",
    "email us",
    "get in touch",
    "mogen contact",
    "download free resources",
    ...BASE_KEYWORDS,
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-8">
            <ContactInfo
              phoneNumber="+27 (0)71.863.1884"
              whatsAppNumber="27718631884"
              whatsAppMessage="Hello%20from%20Mogen%20Web!%20I'm%20interested%20in%20your%20services."
              emailAddress="info@mogen.co.za"
              operationHours="Mon-Fri: 8AM-6PM"
            />

            {/* Free Resources */}
            <FreeResources />
          </div>
        </div>
      </div>
    </div>
  );
}
