"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  CreditCard,
  Globe,
  Info,
  Lightbulb,
  Mail,
  Menu,
  Phone,
  Play,
  Smartphone,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

export default function TownshipPayShowcase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 4000);
  };

  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mock form submission
    showToast("Thank you! We'll reach out shortly.");
    e.currentTarget.reset();
  };

  return (
    <div
      className="antialiased bg-neutral-950 text-neutral-100 selection:bg-violet-500/30 selection:text-neutral-100"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
        scrollBehavior: "smooth",
      }}
    >
      {/* Top gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div
          className="absolute inset-x-0 top-[-40%] mx-auto h-200 w-240 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(124,58,237,0.6), rgba(34,197,94,0.35) 60%, transparent 70%)",
          }}
        ></div>
      </div>

      {/* Toast */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-50">
          <div className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/90 px-4 py-3 shadow-lg backdrop-blur">
            <CheckCircle className="w-6 h-6 text-emerald-400" />
            <div className="text-sm">{toast.message}</div>
            <button
              type="button"
              onClick={() => setToast({ show: false, message: "" })}
              className="ml-2 rounded-lg p-1.5 hover:bg-neutral-800/70 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-900/80 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/** biome-ignore lint/a11y/useValidAnchor: For Demo Purposes */}
            <a href="#" className="group inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-violet-400 transition-colors group-hover:text-violet-300">
                <CreditCard className="w-5 h-5" strokeWidth="2" />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-tight text-neutral-100">
                TownshipPay
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-7">
              <a
                href="#product"
                className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4"
              >
                Product
              </a>
              <a
                href="#about"
                className="hover:text-neutral-100 hover:underline underline-offset-4 text-sm text-neutral-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4"
              >
                Projects
              </a>
              <a
                href="#insights"
                className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4"
              >
                Insights
              </a>
              <a
                href="#testimonials"
                className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-sm text-neutral-200 hover:bg-neutral-800 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
              >
                <Phone className="w-4 h-4" />
                Book demo
              </a>
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600/90 px-3.5 py-2 text-sm font-medium tracking-tight text-white hover:bg-violet-600 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
              >
                <Play className="w-4 h-4" />
                See how it works
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-2 hover:bg-neutral-800 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-neutral-900/80">
              <div className="flex flex-col gap-1 py-3">
                <a
                  href="#product"
                  className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm"
                >
                  Product
                </a>
                <a
                  href="#about"
                  className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm"
                >
                  Projects
                </a>
                <a
                  href="#insights"
                  className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm"
                >
                  Insights
                </a>
                <a
                  href="#testimonials"
                  className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm"
                >
                  Contact
                </a>
                <div className="flex gap-2 px-2 pt-2">
                  <a
                    href="#demo"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-200"
                  >
                    <Phone className="w-4 h-4" />
                    Demo
                  </a>
                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600/90 px-3 py-2 text-sm font-medium text-white"
                  >
                    <Play className="w-4 h-4" />
                    Video
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Live pilot in Letlhabile, Mabopane
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Payments for <span className="text-violet-400">Township</span>{" "}
                Businesses
              </h1>
              <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-2xl">
                Mobile-first payments, instant settlement, and working capital
                designed for SA township realities. Accept all major wallets and
                cards on your phone.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-base font-medium text-white hover:bg-violet-700 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
                >
                  Get started free
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-6 py-3 text-base font-medium text-neutral-200 hover:bg-neutral-800 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
                >
                  <Play className="w-5 h-5" />
                  Watch demo (2 min)
                </button>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  No setup fees
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Same-day settlement
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Offline-first
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Local support
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-2xl">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm font-medium text-neutral-200">
                      Live Dashboard
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400">Today</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      Total Sales
                    </span>
                    <span className="text-lg font-semibold text-white">
                      R 4,230
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      Transactions
                    </span>
                    <span className="text-lg font-semibold text-white">47</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">Avg. Sale</span>
                    <span className="text-lg font-semibold text-white">
                      R 90
                    </span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-800">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-400">Settlement</span>
                      <span className="text-emerald-400">Tomorrow 8am</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                UI preview — not real merchant data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id={"product"} className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Product that meets you on the street
            </h2>
            <p className="mt-3 text-neutral-300">
              A mobile-first payment stack designed for township realities: low
              data, spotty signal, and cashflow needs.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-violet-400" />
                <h3 className="font-medium text-white">Tap to Pay</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-300">
                Accept contactless cards and phones on Android—no extra
                hardware. Works offline-first and syncs later.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-violet-400" />
                <h3 className="font-medium text-white">QR & Wallets</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-300">
                Generate Scan to Pay QR, accept local wallets, and settle
                straight to your bank.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-violet-400" />
                <h3 className="font-medium text-white">Fast Settlement</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-300">
                Same-day settlement to keep stock moving. Clear, fair pricing
                with no lock-in.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-violet-400" />
                <h3 className="font-medium text-white">Offline Ready</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-300">
                Queue transactions when signal drops; auto-retry with smart risk
                controls.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-violet-400" />
                <h3 className="font-medium text-white">Sales Insights</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-300">
                Daily dashboards for sales, top items and repeat customers to
                make better decisions.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-violet-400" />
                <h3 className="font-medium text-white">Working Capital</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-300">
                Opt-in working capital offers based on sales history and
                responsible risk scores.
              </p>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <h4 className="text-xl font-semibold tracking-tight text-white">
                How it works
              </h4>
              <ol className="mt-4 space-y-4">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-medium text-white">
                    1
                  </span>
                  <span className="text-sm text-neutral-300">
                    Download TownshipPay on your Android phone
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-medium text-white">
                    2
                  </span>
                  <span className="text-sm text-neutral-300">
                    Set up your business profile in under 5 minutes
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-medium text-white">
                    3
                  </span>
                  <span className="text-sm text-neutral-300">
                    Start accepting payments via tap, QR, or wallet
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-medium text-white">
                    4
                  </span>
                  <span className="text-sm text-neutral-300">
                    Get paid into your bank account same day
                  </span>
                </li>
              </ol>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <h4 className="text-xl font-semibold tracking-tight text-white">
                Security & compliance
              </h4>
              <div className="mt-4 space-y-3 text-sm text-neutral-300">
                <p>PCI DSS Level 1 certified with end-to-end encryption</p>
                <p>Real-time fraud detection and risk management</p>
                <p>POPIA compliant data handling and privacy protection</p>
                <p>Bank-grade security audited by third-party specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id={"about"} className="border-t border-neutral-900/80">
        <div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Our story
              </h2>
              <p className="mt-4 text-neutral-300">
                TownshipPay was born in Letlhabile, a township outside Brits in
                North West Province. We saw how digital payments were
                transforming commerce in urban centres, but township businesses
                were getting left behind.
              </p>
              <p className="mt-4 text-neutral-300">
                So we built a mobile-first payment stack designed for township
                realities: low data, spotty signal, cashflow constraints, and
                the specific needs of informal trading environments.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
                >
                  <Play className="w-4 h-4" />
                  Watch our story
                </button>
                <a
                  href="#contact"
                  className="text-sm text-neutral-300 hover:text-white underline underline-offset-4"
                >
                  Get in touch
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">50+</div>
                  <div className="text-xs text-neutral-400">
                    Pilot merchants
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">
                    R2.1M
                  </div>
                  <div className="text-xs text-neutral-400">Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">3</div>
                  <div className="text-xs text-neutral-400">Townships</div>
                </div>
              </div>
              <div className="mt-5 text-sm text-neutral-300">
                Since launching our pilot program in early 2024, we have
                processed over R2.1M in transactions for 50+ local businesses
                across Letlhabile, Mabopane, and Ga-Rankuwa.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Case Studies */}
      <section id={"projects"} className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex gap-6 items-end justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Projects & case studies
              </h2>
              <p className="mt-3 text-neutral-300">
                Real-world inspired stories of digitisation and growth. Names
                and partnerships are illustrative.
              </p>
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-sm hover:bg-neutral-800"
            >
              <Mail className="w-4 h-4" />
              Partner with us
            </a>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-violet-700/50 transition-colors">
              <div className="relative h-48 bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <div className="text-white font-bold text-lg">
                  Spaza Shop Success
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-emerald-400 mb-2">
                  <TrendingUp className="w-3 h-3" />
                  <span>Case Study</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Mama Joyce&apos;s Corner Shop
                </h3>
                <p className="text-sm text-neutral-300 mb-3">
                  How digital payments increased daily sales by 40% and reduced
                  cash handling risks in Letlhabile&apos;s busiest spaza shop.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    Letlhabile &bull; 6 months
                  </span>
                  <button
                    type="button"
                    className="text-xs text-violet-400 hover:text-violet-300"
                  >
                    Read case study &rarr;
                  </button>
                </div>
              </div>
            </article>

            <article className="group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-violet-700/50 transition-colors">
              <div className="relative h-48 bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white font-bold text-lg">Taxi Rank</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-blue-400 mb-2">
                  <Users className="w-3 h-3" />
                  <span>Partnership</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Mabopane Taxi Association
                </h3>
                <p className="text-sm text-neutral-300 mb-3">
                  Pilot program enabling contactless fare payments for 15 taxi
                  routes, improving passenger convenience and driver cash flow.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    Mabopane &bull; Active pilot
                  </span>
                  <button
                    type="button"
                    className="text-xs text-violet-400 hover:text-violet-300"
                  >
                    Learn more &rarr;
                  </button>
                </div>
              </div>
            </article>

            <article className="group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-violet-700/50 transition-colors">
              <div className="relative h-48 bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <div className="text-white font-bold text-lg">Micro Loans</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-purple-400 mb-2">
                  <CreditCard className="w-3 h-3" />
                  <span>Financial Inclusion</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Community Finance Co-op
                </h3>
                <p className="text-sm text-neutral-300 mb-3">
                  Using transaction data to enable fair, algorithm-based
                  microloan decisions for township entrepreneurs.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    Ga-Rankuwa &bull; Development
                  </span>
                  <button
                    type="button"
                    className="text-xs text-violet-400 hover:text-violet-300"
                  >
                    Explore &rarr;
                  </button>
                </div>
              </div>
            </article>
          </div>

          <p className="mt-6 text-[11px] text-neutral-500">
            These case studies are illustrative to reflect realistic outcomes in
            similar contexts; any named partnerships are fictional for
            demonstration.
          </p>
        </div>
      </section>

      {/* Financial Insights */}
      <section id={"insights"} className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Financial insights for SA SMEs
            </h2>
            <p className="mt-3 text-neutral-300">
              Data-driven context, trends and practical tips for township
              operators.
            </p>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <div className="flex items-center gap-2 text-emerald-400">
                <Info className="w-4 h-4" />
                <span className="text-sm font-medium">Stats</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li>• 70% of SA SMEs still operate cash-only</li>
                <li>• Digital payments grow sales by 25-45%</li>
                <li>• Township GDP: R500bn+ annually</li>
                <li>• 6M+ township-based businesses</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <div className="flex items-center gap-2 text-emerald-400">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Trends</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li>• Mobile wallet adoption up 300% (2022-24)</li>
                <li>• QR payments preferred by youth market</li>
                <li>• Contactless usage doubles post-COVID</li>
                <li>• Same-day settlement becoming standard</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <div className="flex items-center gap-2 text-emerald-400">
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm font-medium">Tips</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li>• Display QR codes prominently</li>
                <li>• Offer payment choice to all customers</li>
                <li>• Use sales data for inventory planning</li>
                <li>• Train staff on digital payment basics</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Pilot merchant transactions (Letlhabile)
              </h3>
              <p className="mt-1 text-sm text-neutral-400">
                Monthly digital transactions across 50 pilot merchants.
              </p>
              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-3">
                <div className="h-32 flex items-end justify-between">
                  <div
                    className="w-8 bg-violet-600 rounded-t"
                    style={{ height: "20%" }}
                  ></div>
                  <div
                    className="w-8 bg-violet-600 rounded-t"
                    style={{ height: "35%" }}
                  ></div>
                  <div
                    className="w-8 bg-violet-600 rounded-t"
                    style={{ height: "55%" }}
                  ></div>
                  <div
                    className="w-8 bg-violet-600 rounded-t"
                    style={{ height: "70%" }}
                  ></div>
                  <div
                    className="w-8 bg-violet-600 rounded-t"
                    style={{ height: "85%" }}
                  ></div>
                  <div
                    className="w-8 bg-violet-600 rounded-t"
                    style={{ height: "100%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                What this means
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-neutral-300">
                <li>• Steady month-on-month growth in adoption</li>
                <li>• Repeat customers drive transaction volume</li>
                <li>• Peak periods align with grant payment cycles</li>
                <li>• QR payments most popular for amounts under R50</li>
              </ul>
              <a
                href="#demo"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-sm hover:bg-neutral-800"
              >
                <Phone className="w-4 h-4" />
                Book demo
              </a>
            </div>
          </div>

          <p className="mt-6 text-[11px] text-neutral-500">
            Sources: FinMark Trust (2022–2023), International Finance
            Corporation (2018). Figures are contextual summaries; use alongside
            your own data.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id={"testimonials"} className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What our customers say
            </h2>
            <p className="mt-3 text-neutral-300">
              Local voices from Letlhabile, Mabopane and surrounds.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-semibold">
                  MJ
                </div>
                <div>
                  <div className="font-medium text-white">Mama Joyce</div>
                  <div className="text-sm text-neutral-400">
                    Corner Shop, Letlhabile
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-300">
                &quot;TownshipPay helped me grow my business — now commuters pay
                fast and I restock the same day.&quot;
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                  TM
                </div>
                <div>
                  <div className="font-medium text-white">Thabo Mthembu</div>
                  <div className="text-sm text-neutral-400">
                    Taxi Driver, Mabopane
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-300">
                &quot;QR payments are quick and safe. End of day totals match —
                no more cash errors.&quot;
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                  SK
                </div>
                <div>
                  <div className="font-medium text-white">Sarah Kekana</div>
                  <div className="text-sm text-neutral-400">
                    Finance Co-op, Ga-Rankuwa
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-300">
                &quot;The sales data stream supports fair microloan decisions
                and healthy repayments.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead capture / Demo */}
      <section id={"demo"} className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                See TownshipPay in action
              </h2>
              <p className="mt-3 text-neutral-300">
                Tell us about your business and we will set up a personalised
                walk-through. Limited pilot slots are available in Letlhabile,
                Mabopane and Ga-Rankuwa.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> 15-minute
                  personalised demo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Free
                  setup and onboarding support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> No
                  commitment required
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Local
                  support in your language
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-neutral-200 mb-1"
                  >
                    Business name
                  </label>
                  <input
                    id={"businessName"}
                    type="text"
                    required
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-neutral-200 mb-1"
                  >
                    Your name
                  </label>
                  <input
                    id={"fullName"}
                    type="text"
                    required
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor={"phoneNumber"}
                    className="block text-sm font-medium text-neutral-200 mb-1"
                  >
                    Phone number
                  </label>
                  <input
                    id={"phoneNumber"}
                    type="tel"
                    required
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    placeholder="081 234 5678"
                  />
                </div>
                <div>
                  <label
                    htmlFor={"businessType"}
                    className="block text-sm font-medium text-neutral-200 mb-1"
                  >
                    Business type
                  </label>
                  <select
                    id={"businessType"}
                    required
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                  >
                    <option value="">Select business type</option>
                    <option value="spaza">Spaza shop</option>
                    <option value="salon">Salon/barber</option>
                    <option value="restaurant">Restaurant/takeaway</option>
                    <option value="taxi">Taxi/transport</option>
                    <option value="retail">Retail/clothing</option>
                    <option value="services">Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                >
                  Book free demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer CTA */}
      <section id={"contact"} className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Ready to get started?
                </h3>
                <p className="text-neutral-300 mb-4">
                  Join the growing community of township businesses already
                  using TownshipPay to grow their sales and serve customers
                  better.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#demo"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
                  >
                    Get started free
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-700"
                  >
                    <Play className="w-4 h-4" />
                    Watch demo
                  </button>
                </div>
                <form onSubmit={handleFormSubmit} className="mt-6 flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email for updates"
                    className="flex-1 rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-3">
                  Contact us
                </h4>
                <div className="space-y-2 text-sm text-neutral-300">
                  <div>Email: hello@townshippay.co.za</div>
                  <div>WhatsApp: 079 123 4567</div>
                  <div>Support: Available 8am-6pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-neutral-400 text-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-violet-400">
                <CreditCard className="w-4 h-4" />
              </div>
              <span>© 2024 TownshipPay. All rights reserved.</span>
            </div>
            <div className="text-[11px] text-neutral-500">
              Built in Letlhabile with care. Case studies are illustrative;
              partnerships named are fictional.
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/** biome-ignore lint/a11y/useKeyWithClickEvents: Demo Only */}
          {/** biome-ignore lint/a11y/noStaticElementInteractions: Demo Only */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setVideoModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-900 px-4 py-3">
              <div className="inline-flex items-center gap-2 text-sm text-neutral-300">
                <Play className="w-4 h-4" />
                TownshipPay Explainer
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="rounded-lg p-1.5 hover:bg-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-3">
              <div className="rounded-xl border border-neutral-900 bg-black overflow-hidden">
                <div className="aspect-video flex items-center justify-center bg-linear-to-br from-violet-600 to-purple-700">
                  <div className="text-white text-center">
                    <Play className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-lg font-semibold">
                      TownshipPay Demo Video
                    </div>
                    <div className="text-sm opacity-75">2:30 minutes</div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-xs text-neutral-500">
                  See how TownshipPay works in real township businesses
                </div>
                <div className="text-xs text-neutral-400">2:30</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
