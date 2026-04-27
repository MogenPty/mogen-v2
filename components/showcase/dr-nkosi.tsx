"use client";

import {
  Award,
  Calendar,
  Clock,
  Heart,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DrNkosiShowcase() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-orange-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                Dr. Nkosi Practice
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-orange-600 font-semibold"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-600 font-semibold"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-orange-600 font-semibold"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-600 font-semibold"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id={"home"}
        className="bg-linear-to-br from-orange-50 to-amber-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Professional Healthcare
                <span className="block text-orange-600">
                  With a Personal Touch
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dr. Nkosi provides calm, professional medical care in a
                welcoming environment. With years of experience and a gentle
                approach, your comfort and health are our top priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => router.push("#contact", { scroll: true })}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg hover:cursor-pointer"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Request Appointment
                </Button>
                <Button
                  onClick={() => router.push("#about", { scroll: true })}
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg hover:cursor-pointer"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                width={800}
                height={600}
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Dr. Nkosi's calm and professional medical practice"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Professional</p>
                    <p className="text-sm text-gray-600">Caring Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id={"about"} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Dr. Nkosi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated healthcare professional committed to providing calm,
              professional medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Calm. Professional. Caring.
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dr. Nkosi believes that healthcare should be a calm and
                reassuring experience. With a gentle bedside manner and thorough
                approach to patient care, Dr. Nkosi ensures every patient feels
                heard, understood, and well cared for.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    MBChB, University of Cape Town
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">12+ Years of Experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">HPCSA Registered</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Gentle Patient-Centered Care
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-orange-600 mb-2">12+</h4>
                <p className="text-gray-700">Years Experience</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-amber-600 mb-2">800+</h4>
                <p className="text-gray-700">Patients Cared For</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-red-600 mb-2">Calm</h4>
                <p className="text-gray-700">Environment</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-green-600 mb-2">98%</h4>
                <p className="text-gray-700">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id={"services"} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional healthcare services in a calm, comfortable
              environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Practice",
                description:
                  "Comprehensive primary healthcare for all ages in a calm setting",
                icon: User,
              },
              {
                title: "Wellness Check-ups",
                description:
                  "Regular health assessments and preventive care consultations",
                icon: Heart,
              },
              {
                title: "Chronic Care Management",
                description:
                  "Ongoing support for diabetes, hypertension, and other conditions",
                icon: Calendar,
              },
              {
                title: "Women's Health",
                description:
                  "Specialized care for women's health needs and concerns",
                icon: User,
              },
              {
                title: "Minor Procedures",
                description:
                  "Small medical procedures performed in our comfortable office",
                icon: Award,
              },
              {
                title: "Health Counseling",
                description:
                  "Lifestyle advice and health education in a supportive environment",
                icon: Heart,
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id={"contact"} className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Dr. Nkosi</h2>
            <p className="text-xl text-orange-100">
              Ready to experience calm, professional healthcare? Get in touch
              with us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-orange-100">+27 (0)11 456 7890</p>
                  <p className="text-sm text-orange-200">
                    Call for appointments
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-orange-100">appointments@drnkosi.co.za</p>
                  <p className="text-sm text-orange-200">
                    We respond within 12 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-orange-100">
                    456 Wellness Avenue, Medical Plaza
                  </p>
                  <p className="text-orange-100">
                    Cape Town, Western Cape 8001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hours</h3>
                  <p className="text-orange-100">
                    Monday - Friday: 8:30 AM - 5:30 PM
                  </p>
                  <p className="text-orange-100">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-sm text-orange-200">Closed Sundays</p>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">
                Request an Appointment
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor={"fullName"}
                    className="block text-sm font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id={"fullName"}
                    name={"fullName"}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor={"phoneNumber"}
                    className="block text-sm font-semibold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id={"phoneNumber"}
                    name={"phoneNumber"}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor={"preferredDate"}
                    className="block text-sm font-semibold mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    id={"preferredDate"}
                    name={"preferredDate"}
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor={"reason"}
                    className="block text-sm font-semibold mb-2"
                  >
                    Reason for Visit
                  </label>
                  <textarea
                    id={"reason"}
                    name={"reason"}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Brief description of your health concern or routine check-up"
                  ></textarea>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                  Request Appointment
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold">Dr. Nkosi Practice</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Providing calm, professional healthcare with a personal touch.
            </p>
            <div className="border-t border-gray-700 pt-6 mt-6">
              <p className="text-gray-500">
                &copy; 2024 Dr. Nkosi Practice. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Website designed by{" "}
                <span className="text-orange-500 font-semibold">MOGEN</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
