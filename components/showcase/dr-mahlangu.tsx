"use client";

import {
  ActivityIcon,
  BabyIcon,
  CalendarIcon,
  CaretDownIcon,
  CheckCircleIcon,
  ClockIcon,
  GraduationCapIcon,
  HamburgerIcon,
  HeartbeatIcon,
  HeartIcon,
  InfoIcon,
  LeafIcon,
  MailboxIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  StarIcon,
  StethoscopeIcon,
  UserIcon,
  UsersIcon,
  XIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DrMahlanguShowcase() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [openFAQs, setOpenFAQs] = useState(new Set<number>());

  const currentPage = searchParams.get("page") || "home";
  const validPages = [
    "home",
    "about",
    "services",
    "appointments",
    "testimonials",
    "journal",
    "faq",
    "contact",
  ];
  const selectedPage = validPages.includes(currentPage) ? currentPage : "home";

  const navigateToPage = (newPage: string) => {
    router.push(`?page=${newPage}`);
    setIsMobileMenuOpen(false);
  };

  const toggleFAQ = (index: number) => {
    const newOpenFAQs = new Set(openFAQs);
    if (newOpenFAQs.has(index)) {
      newOpenFAQs.delete(index);
    } else {
      newOpenFAQs.add(index);
    }
    setOpenFAQs(newOpenFAQs);
  };

  const handleAppointmentSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.submittedAt = new Date().toISOString();

    try {
      const existing = JSON.parse(localStorage.getItem("appointments") || "[]");
      existing.push(data);
      localStorage.setItem("appointments", JSON.stringify(existing));
      setFormStatus("Appointment request submitted successfully.");
      e.currentTarget.reset();
    } catch (err) {
      setFormStatus("Unable to save your request locally. Please call us.");
      console.error(err);
    }
  };

  useEffect(() => {
    const titleMap: Record<string, string> = {
      home: "Home",
      about: "About",
      services: "Services",
      appointments: "Appointments",
      testimonials: "Testimonials",
      journal: "Medical Journal",
      faq: "FAQ",
      contact: "Contact",
    };
    document.title = `${titleMap[selectedPage] || "Home"} | Dr. Sipho Mahlangu Family Clinic | Soshanguve`;
  }, [selectedPage]);

  return (
    <div className="antialiased bg-white text-slate-900 font-sans">
      {/* Skip Link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-slate-900 px-3 py-2 rounded-md shadow ring-2 ring-teal-600"
      >
        Skip to content
      </a>

      {/* Top Bar */}
      <div className="w-full bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPinIcon
                className="w-4 h-4"
                strokeWidth="1.5"
                aria-hidden="true"
              />
              <span>Soshanguve, City of Tshwane</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-slate-700">
              <ClockIcon
                className="w-4 h-4"
                strokeWidth="1.5"
                aria-hidden="true"
              />
              <span>Mon–Fri 08:00–17:00 • Sat 09:00–13:00</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+27126203456"
              className="flex items-center gap-2 text-teal-700 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded px-1"
            >
              <PhoneIcon
                className="w-4 h-4"
                strokeWidth="1.5"
                aria-hidden="true"
              />
              <span className="font-medium">+27 12 620 3456</span>
            </a>
            <a
              href="mailto:reception@drmahlanguclinic.co.za"
              className="hidden sm:flex items-center gap-2 text-teal-700 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded px-1"
            >
              <MailboxIcon
                className="w-4 h-4"
                strokeWidth="1.5"
                aria-hidden="true"
              />
              <span className="font-medium">
                reception@drmahlanguclinic.co.za
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigateToPage("home")}
            aria-label="Dr. Sipho Mahlangu Family Clinic home"
            className="flex items-center gap-3 hover:cursor-pointer"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-teal-700 text-white shadow-sm">
              <span className="tracking-tight font-semibold">SM</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg tracking-tight font-semibold text-slate-900">
                Dr. Sipho Mahlangu
              </span>
              <span className="text-xs text-slate-600">Family Clinic</span>
            </div>
          </button>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-1"
          >
            <NavLink
              pageName="about"
              selectedPage={selectedPage}
              navigateToPage={navigateToPage}
            >
              About
            </NavLink>
            <NavLink
              pageName="services"
              selectedPage={selectedPage}
              navigateToPage={navigateToPage}
            >
              Services
            </NavLink>
            <NavLink
              pageName="appointments"
              selectedPage={selectedPage}
              navigateToPage={navigateToPage}
            >
              Appointments
            </NavLink>
            <NavLink
              pageName="testimonials"
              selectedPage={selectedPage}
              navigateToPage={navigateToPage}
            >
              Testimonials
            </NavLink>
            <NavLink
              pageName="journal"
              selectedPage={selectedPage}
              navigateToPage={navigateToPage}
            >
              Medical Journal
            </NavLink>
            <NavLink
              pageName="faq"
              selectedPage={selectedPage}
              navigateToPage={navigateToPage}
            >
              FAQ
            </NavLink>
            <NavLink
              pageName="contact"
              selectedPage={selectedPage}
              navigateToPage={navigateToPage}
            >
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigateToPage("appointments")}
              className="inline-flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-md shadow hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              <CalendarIcon
                className="w-4 h-4"
                strokeWidth="1.5"
                aria-hidden="true"
              />
              <span className="font-medium">Book</span>
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-controls="mobileNav"
              aria-expanded={isMobileMenuOpen}
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <HamburgerIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200">
            <nav className="px-4 py-3 flex flex-col gap-1" aria-label="Mobile">
              <NavLink
                pageName="about"
                selectedPage={selectedPage}
                navigateToPage={navigateToPage}
                className="block"
              >
                About
              </NavLink>
              <NavLink
                pageName="services"
                selectedPage={selectedPage}
                navigateToPage={navigateToPage}
                className="block"
              >
                Services
              </NavLink>
              <NavLink
                pageName="appointments"
                selectedPage={selectedPage}
                navigateToPage={navigateToPage}
                className="block"
              >
                Appointments
              </NavLink>
              <NavLink
                pageName="testimonials"
                selectedPage={selectedPage}
                navigateToPage={navigateToPage}
                className="block"
              >
                Testimonials
              </NavLink>
              <NavLink
                pageName="journal"
                selectedPage={selectedPage}
                navigateToPage={navigateToPage}
                className="block"
              >
                Medical Journal
              </NavLink>
              <NavLink
                pageName="faq"
                selectedPage={selectedPage}
                navigateToPage={navigateToPage}
                className="block"
              >
                FAQ
              </NavLink>
              <NavLink
                pageName="contact"
                selectedPage={selectedPage}
                navigateToPage={navigateToPage}
                className="block"
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      {selectedPage === "home" && (
        <section className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl tracking-tight font-semibold text-slate-900">
                Compassionate Family Care in Soshanguve
              </h1>
              <p className="mt-4 text-slate-700 text-lg">
                Primary care that puts community first. From preventive checkups
                to chronic disease management, we care for every generation with
                dignity and respect.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigateToPage("appointments")}
                  className="inline-flex items-center gap-2 bg-teal-700 text-white px-5 py-3 rounded-md shadow hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  <CalendarIcon
                    className="w-5 h-5"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  />
                  <span className="font-medium">Request an Appointment</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigateToPage("services")}
                  className="inline-flex items-center gap-2 bg-white text-teal-800 px-5 py-3 rounded-md border border-teal-200 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  <StethoscopeIcon
                    className="w-5 h-5"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  />
                  <span className="font-medium">Our Services</span>
                </button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldIcon
                    className="w-4 h-4 text-teal-700"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  />
                  <span>POPIA-aligned privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon
                    className="w-4 h-4 text-teal-700"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  />
                  <span>Accessible care</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-xl bg-linear-to-b from-teal-100 to-transparent opacity-60 pointer-events-none"
                aria-hidden="true"
              ></div>
              <Image
                width={900}
                height={360}
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1800&auto=format&fit=crop"
                alt="Warm, professional clinic team ready to assist"
                className="relative rounded-xl border border-slate-200 shadow-sm w-full object-cover h-90"
              />
            </div>
          </div>
        </section>
      )}

      <main id={"main"} tabIndex={-1}>
        {/* About Page */}
        {selectedPage === "about" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl tracking-tight font-semibold text-slate-900">
                  About Dr. Mahlangu
                </h2>
                <p className="mt-4 text-slate-700">
                  Raised in Soshanguve and trained in family medicine, Dr. Sipho
                  Mahlangu has served local families for over a decade. He
                  believes that respectful, evidence-based care—delivered in the
                  patient&apos;s language and context—is the strongest tool for
                  healthier communities.
                </p>
                <p className="mt-4 text-slate-700">
                  Our clinic&apos;s commitment is simple: listen carefully, act
                  promptly, and follow through. We collaborate with local
                  specialists, public health programmes, and social services to
                  ensure continuity of care for every patient.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-3">
                    <GraduationCapIcon
                      className="w-5 h-5 text-teal-700"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    />
                    <span className="text-slate-800">
                      <span className="font-medium">Background:</span> MBChB,
                      Postgraduate Diploma in Family Medicine; continuous
                      professional development in chronic disease, women&apos;s
                      health, and child health.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <HeartbeatIcon
                      className="w-5 h-5 text-teal-700"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    />
                    <span className="text-slate-800">
                      <span className="font-medium">Commitment:</span>{" "}
                      Compassionate, affordable, and accessible healthcare for
                      Soshanguve families.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <UsersIcon
                      className="w-5 h-5 text-teal-700"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    />
                    <span className="text-slate-800">
                      <span className="font-medium">Languages:</span> Setswana,
                      isiZulu, Sepedi, English.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <LeafIcon
                    className="w-5 h-5 text-teal-700"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl tracking-tight font-semibold text-slate-900">
                    Clinic at a glance
                  </h3>
                </div>
                <dl className="mt-4 grid sm:grid-cols-2 gap-4 text-slate-800">
                  <div className="p-4 rounded-lg bg-white border border-slate-200">
                    <dt className="text-sm text-slate-600">Founded</dt>
                    <dd className="mt-1 font-medium">2014</dd>
                  </div>
                  <div className="p-4 rounded-lg bg-white border border-slate-200">
                    <dt className="text-sm text-slate-600">Patients served</dt>
                    <dd className="mt-1 font-medium">10,000+</dd>
                  </div>
                  <div className="p-4 rounded-lg bg-white border border-slate-200">
                    <dt className="text-sm text-slate-600">Affiliations</dt>
                    <dd className="mt-1 font-medium">Local referral network</dd>
                  </div>
                  <div className="p-4 rounded-lg bg-white border border-slate-200">
                    <dt className="text-sm text-slate-600">Accessibility</dt>
                    <dd className="mt-1 font-medium">Wheelchair-friendly</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        )}

        {/* Services Page */}
        {selectedPage === "services" && (
          <section className="bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl tracking-tight font-semibold text-slate-900">
                  Services
                </h2>
                <button
                  type="button"
                  onClick={() => navigateToPage("appointments")}
                  className="hidden sm:inline-flex items-center gap-2 text-teal-800 hover:text-teal-900 px-3 py-2 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  <CalendarIcon className="w-4 h-4" strokeWidth="1.5" />
                  <span className="font-medium">Book now</span>
                </button>
              </div>
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
                  <div className="flex items-center gap-3">
                    <StethoscopeIcon
                      className="w-6 h-6 text-teal-700"
                      strokeWidth="1.5"
                    />
                    <h3 className="text-lg tracking-tight font-semibold text-slate-900">
                      General & Preventive Care
                    </h3>
                  </div>
                  <p className="mt-2 text-slate-700">
                    Checkups, screenings, vaccinations, lifestyle counselling,
                    medical certificates.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
                  <div className="flex items-center gap-3">
                    <ActivityIcon
                      className="w-6 h-6 text-teal-700"
                      strokeWidth="1.5"
                    />
                    <h3 className="text-lg tracking-tight font-semibold text-slate-900">
                      Chronic Disease Management
                    </h3>
                  </div>
                  <p className="mt-2 text-slate-700">
                    Hypertension, diabetes, asthma/COPD, HIV care in
                    coordination with local programmes.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
                  <div className="flex items-center gap-3">
                    <BabyIcon
                      className="w-6 h-6 text-teal-700"
                      strokeWidth="1.5"
                    />
                    <h3 className="text-lg tracking-tight font-semibold text-slate-900">
                      Women&apos;s & Child Health
                    </h3>
                  </div>
                  <p className="mt-2 text-slate-700">
                    Antenatal care, family planning, immunizations, growth
                    monitoring.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
                  <div className="flex items-center gap-3">
                    <HeartIcon
                      className="w-6 h-6 text-teal-700"
                      strokeWidth="1.5"
                    />
                    <h3 className="text-lg tracking-tight font-semibold text-slate-900">
                      Mental Health Support
                    </h3>
                  </div>
                  <p className="mt-2 text-slate-700">
                    Counselling, stress management, depression screening and
                    basic mental health care.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
                  <div className="flex items-center gap-3">
                    <UserIcon
                      className="w-6 h-6 text-teal-700"
                      strokeWidth="1.5"
                    />
                    <h3 className="text-lg tracking-tight font-semibold text-slate-900">
                      Elderly Care
                    </h3>
                  </div>
                  <p className="mt-2 text-slate-700">
                    Geriatric assessments, medication reviews, fall prevention,
                    chronic care coordination.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
                  <div className="flex items-center gap-3">
                    <StethoscopeIcon
                      className="w-6 h-6 text-teal-700"
                      strokeWidth="1.5"
                    />
                    <h3 className="text-lg tracking-tight font-semibold text-slate-900">
                      Minor Procedures
                    </h3>
                  </div>
                  <p className="mt-2 text-slate-700">
                    Wound care, minor surgery, skin lesion removal, joint
                    injections.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Appointments Page */}
        {selectedPage === "appointments" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl tracking-tight font-semibold text-slate-900">
                  Book an Appointment
                </h2>
                <p className="mt-4 text-slate-700">
                  Complete the form below to request an appointment. We&apos;ll
                  confirm your booking within 24 hours.
                </p>
                <form
                  onSubmit={handleAppointmentSubmit}
                  className="mt-6 space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-slate-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id={"firstName"}
                        name="firstName"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id={"lastName"}
                        name="lastName"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id={"phone"}
                      name="phone"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id={"email"}
                      name="email"
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id={"preferredDate"}
                      name="preferredDate"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Reason for Visit
                    </label>
                    <textarea
                      id={"reason"}
                      name="reason"
                      rows={3}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal-700 text-white py-3 px-4 rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    Submit Request
                  </button>
                  {formStatus && (
                    <p className="text-sm text-teal-700 bg-teal-50 p-3 rounded-md">
                      {formStatus}
                    </p>
                  )}
                </form>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Contact Information
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-5 h-5 text-teal-700" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-slate-600">+27 12 620 3456</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MailboxIcon className="w-5 h-5 text-teal-700" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-slate-600">
                        reception@drmahlanguclinic.co.za
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="w-5 h-5 text-teal-700" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-slate-600">
                        123 Medical Centre
                        <br />
                        Soshanguve, 0152
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-teal-700" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-slate-600">
                        Mon–Fri: 08:00–17:00
                        <br />
                        Sat: 09:00–13:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Page */}
        {selectedPage === "faq" && (
          <section className="bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <div className="flex items-center gap-3 mb-8">
                <InfoIcon className="w-6 h-6 text-teal-700" strokeWidth="1.5" />
                <h2 className="text-3xl tracking-tight font-semibold text-slate-900">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                {[
                  {
                    question: "Do you accept walk-ins?",
                    answer:
                      "Yes. Walk-ins are welcome for urgent issues, but appointments reduce waiting time.",
                  },
                  {
                    question: "Which medical aids do you work with?",
                    answer:
                      "We provide detailed invoices for most medical aids. Please call us to confirm your plan.",
                  },
                  {
                    question: "Can I get repeat scripts?",
                    answer:
                      "Yes. For long‑term conditions, we align with guideline-based reviews to ensure safe, effective treatment.",
                  },
                  {
                    question: "Do you offer home visits?",
                    answer:
                      "Home visits are available for elderly or mobility-impaired patients within the Soshanguve area. Please call to discuss arrangements.",
                  },
                  {
                    question: "What languages do you speak?",
                    answer:
                      "Dr. Mahlangu is fluent in Setswana, isiZulu, Sepedi, and English to better serve our diverse community.",
                  },
                  {
                    question: "How do I prepare for my appointment?",
                    answer:
                      "Bring your ID, medical aid card (if applicable), current medications, and any recent test results. Arrive 15 minutes early for paperwork.",
                  },
                  {
                    question: "Do you treat children?",
                    answer:
                      "Yes, we provide comprehensive pediatric care including immunizations, growth monitoring, and treatment of childhood illnesses.",
                  },
                  {
                    question: "What are your emergency procedures?",
                    answer:
                      "For life-threatening emergencies, call 10177. For urgent care during business hours, walk-ins are prioritized based on medical need.",
                  },
                ].map((faq, index) => (
                  <div
                    key={faq.question}
                    className="bg-white border border-slate-200 rounded-xl p-4"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex cursor-pointer items-center justify-between w-full text-left focus:outline-none focus:ring-2 focus:ring-teal-600 rounded"
                    >
                      <span className="font-medium text-slate-900">
                        {faq.question}
                      </span>
                      <CaretDownIcon
                        className={`w-5 h-5 text-slate-500 transition-transform ${
                          openFAQs.has(index) ? "rotate-180" : ""
                        }`}
                        strokeWidth="1.5"
                        aria-hidden="true"
                      />
                    </button>
                    {openFAQs.has(index) && (
                      <p className="mt-2 text-slate-700">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Page */}
        {selectedPage === "testimonials" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <StarIcon className="w-6 h-6 text-teal-700" strokeWidth="1.5" />
                <h2 className="text-3xl tracking-tight font-semibold text-slate-900">
                  Patient Testimonials
                </h2>
              </div>
              <p className="text-xl text-slate-600">
                What our patients say about their care experience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Nomsa M.",
                  text: "Dr. Mahlangu takes time to listen and explains everything clearly. I feel comfortable bringing my whole family here.",
                  rating: 5,
                },
                {
                  name: "Thabo K.",
                  text: "Professional service with a personal touch. The clinic is clean and the staff is friendly. Highly recommended.",
                  rating: 5,
                },
                {
                  name: "Maria S.",
                  text: "I've been coming here for 3 years for my diabetes management. Dr. Mahlangu helped me understand my condition better.",
                  rating: 5,
                },
                {
                  name: "Joseph L.",
                  text: "Great with children! My son actually looks forward to his check-ups now. Thank you for the excellent care.",
                  rating: 5,
                },
                {
                  name: "Grace N.",
                  text: "Accessible healthcare in our community. The fact that Dr. Mahlangu speaks our languages makes such a difference.",
                  rating: 5,
                },
                {
                  name: "Peter M.",
                  text: "Quick service, professional care. I can always get an appointment when I need one. Very satisfied.",
                  rating: 5,
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <StarIcon
                        // biome-ignore lint/suspicious/noArrayIndexKey: There is no other way to mark the key.
                        key={`star-${i}`}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">{`"${testimonial.text}"`}</p>
                  <p className="font-medium text-slate-900">
                    — {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Medical Journal Page */}
        {selectedPage === "journal" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCapIcon
                className="w-6 h-6 text-teal-700"
                strokeWidth="1.5"
              />
              <h2 className="text-3xl tracking-tight font-semibold text-slate-900">
                Medical Journal & Resources
              </h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-8">
                Stay informed with the latest medical research and health
                information relevant to our community.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Recent Health Topics
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-medium text-slate-900">
                      Managing Hypertension in South Africa
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Updated guidelines for blood pressure management and
                      lifestyle interventions
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-medium text-slate-900">
                      Diabetes Prevention Strategies
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Community-based approaches to preventing Type 2 diabetes
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-medium text-slate-900">
                      Childhood Immunization Schedule
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Updated vaccination guidelines for South African children
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Referenced Literature
              </h3>
              <ol className="space-y-3 text-slate-700">
                <li>
                  Berry KM, Parker W-A, McHiza ZJ, et al. Quantifying unmet need
                  for hypertension care in South Africa through a cascade of
                  care analysis. BMJ Global Health. 2017;2(3):e000348.
                </li>
                <li>
                  South African Medical Journal (SAMJ). Hypertension in South
                  African adults – clinical perspectives and policy
                  implications. 2022.
                </li>
                <li>
                  The Lancet. Health in South Africa Series – Progress and
                  challenges in the health system. 2012.
                </li>
                <li>
                  South African Journal of HIV Medicine. Progress towards HIV
                  treatment and viral suppression targets in South Africa.
                  2019–2021.
                </li>
                <li>
                  BMC Public Health. Hypertension prevalence and associated
                  factors in South African adults (SANHANES analyses).
                  2018–2019.
                </li>
              </ol>
              <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700">
                Note: Links go to journal publishers or search pages for the
                cited work. For specific article PDFs or DOIs, please consult
                the journal sites or your healthcare provider.
              </div>
            </div>
          </section>
        )}

        {selectedPage === "contact" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-3xl tracking-tight font-semibold text-slate-900 text-center mb-10">
              Contact Us
            </h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-6 h-6 text-teal-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+27 12 620 3456</p>
                    <p className="text-sm text-slate-500">
                      Available during business hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MailboxIcon className="w-6 h-6 text-teal-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">
                      reception@drmahlanguclinic.co.za
                    </p>
                    <p className="text-sm text-slate-500">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-6 h-6 text-teal-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-600">
                      123 Medical Centre
                      <br />
                      Soshanguve, 0152
                      <br />
                      City of Tshwane
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClockIcon className="w-6 h-6 text-teal-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Operating Hours
                    </h3>
                    <p className="text-slate-600">
                      Monday - Friday: 08:00 - 17:00
                      <br />
                      Saturday: 09:00 - 13:00
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  Emergency Information
                </h3>
                <p className="text-slate-700 mb-4">
                  For medical emergencies outside our operating hours, please
                  contact:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Emergency Services: 10177</li>
                  <li>• Netcare 911: 082 911</li>
                  <li>• ER24: 084 124</li>
                </ul>
                <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-md">
                  <p className="text-sm text-teal-800">
                    <strong>Note:</strong> For urgent but non-emergency
                    situations during business hours, walk-ins are welcome
                    though appointments are preferred.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-teal-600 text-white shadow-sm mr-3">
                <span className="tracking-tight font-semibold">SM</span>
              </div>
              <h3 className="text-2xl font-bold">
                Dr. Sipho Mahlangu Family Clinic
              </h3>
            </div>
            <p className="text-slate-400 mb-4">
              Compassionate family care in the heart of Soshanguve
            </p>
            <div className="border-t border-slate-700 pt-6 mt-6">
              <p className="text-slate-500">
                &copy; {new Date().getFullYear()} Dr. Sipho Mahlangu Family
                Clinic. All rights reserved.
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Website designed by{" "}
                <span className="text-teal-400 font-semibold">MOGEN</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const NavLink = ({
  pageName,
  children,
  selectedPage,
  navigateToPage,
  className = "",
}: {
  pageName: string;
  children: React.ReactNode;
  selectedPage: string;
  navigateToPage: (pageName: string) => void;
  className?: string;
}) => (
  <button
    type="button"
    onClick={() => navigateToPage(pageName)}
    className={`hover:cursor-pointer px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 ${
      selectedPage === pageName
        ? "text-teal-800 bg-teal-50 font-medium"
        : "text-slate-700 hover:text-teal-800 hover:bg-teal-50"
    } ${className}`}
  >
    {children}
  </button>
);
