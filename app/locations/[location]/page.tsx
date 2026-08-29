import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackLink from "@/components/shared/back-link";
import { locations, getLocation } from "@/data/locations";
import { services } from "@/data/services";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mogen.co.za";

interface Props {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locSlug } = await params;
  const loc = getLocation(locSlug);
  if (!loc) return { title: "Location Not Found", robots: { index: false, follow: false } };
  return {
    title: loc.seoTitle,
    description: loc.seoDescription,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      url: `/locations/${loc.slug}`,
      type: "website",
      title: loc.seoTitle,
      description: loc.seoDescription,
    },
    keywords: [`web design ${loc.name}`, `website design ${loc.name}`, `mogen ${loc.name}`],
  };
}

export default async function LocationHub({ params }: Props) {
  const { location: locSlug } = await params;
  const loc = getLocation(locSlug);
  if (!loc) notFound();

  const availableServices = services.filter((s) => loc.services.includes(s.slug));

  // JSON-LD: LocalBusiness + Breadcrumb
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE}/locations` },
      { "@type": "ListItem", position: 3, name: loc.displayName, item: `${BASE}/locations/${loc.slug}` },
    ],
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE}/locations/${loc.slug}#organization`,
    name: `Mogen Pty Ltd — ${loc.displayName}`,
    url: `${BASE}/locations/${loc.slug}`,
    telephone: loc.telephone,
    email: loc.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.streetAddress,
      addressLocality: loc.name,
      postalCode: loc.postalCode,
      addressRegion: loc.province,
      addressCountry: loc.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.coordinates.latitude,
      longitude: loc.coordinates.longitude,
    },
    areaServed: loc.areasServed,
    serviceType: availableServices.map((s) => s.title),
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackLink text="Back to Locations" link="/locations" />

        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-blue-600 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform -rotate-1 mb-6">
            {loc.province.toUpperCase()} · {loc.postalCode}
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="block transform -rotate-1">{loc.heroTitle.toUpperCase()}</span>
          </h1>
          <p className="text-2xl font-black text-purple-500 mb-4">{loc.heroSubtitle}</p>
          <p className="text-lg font-bold text-gray-600 max-w-3xl mx-auto leading-relaxed">{loc.intro}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm font-bold text-gray-700">
            <span className="bg-white px-3 py-1 neo-brutalist-border">
              {loc.streetAddress}, {loc.name} {loc.postalCode}
            </span>
            <a href="tel:+27765207876" className="bg-lime-400 px-3 py-1 neo-brutalist-border">
              076 520 7876
            </a>
          </div>
        </div>

        {/* Why us here */}
        <div className="bg-black text-white p-8 neo-brutalist-border neo-brutalist-shadow transform rotate-1 mb-12">
          <h2 className="text-3xl font-black text-lime-400 mb-6">{loc.whyTitle.toUpperCase()}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {loc.whyPoints.map((p) => (
              <li key={p} className="flex gap-3 font-bold">
                <span className="text-lime-400">▸</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services offered here */}
        <div className="mb-12">
          <h2 className="text-4xl font-black mb-2">SERVICES IN {loc.displayName.toUpperCase()}</h2>
          <p className="font-bold text-gray-600 mb-8">
            Only the services we actively offer in {loc.displayName} are listed — no filler pages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/locations/${loc.slug}/${svc.slug}`}
                className="bg-white p-6 neo-brutalist-border neo-brutalist-shadow hover:scale-[1.02] transition-all block"
              >
                <div className={`${svc.color} text-white px-3 py-1 neo-brutalist-border font-black text-xs inline-block mb-3`}>
                  {svc.category?.toUpperCase()}
                </div>
                <h3 className="text-2xl font-black mb-2">{svc.title}</h3>
                <p className="font-bold text-gray-600 mb-4 line-clamp-3">{svc.description}</p>
                <span className="font-black text-purple-500">View {svc.title} in {loc.displayName} →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Areas served + CTA */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 neo-brutalist-border neo-brutalist-shadow">
            <h3 className="text-2xl font-black mb-4">AREAS WE SERVE FROM {loc.displayName.toUpperCase()}</h3>
            <div className="flex flex-wrap gap-2">
              {loc.areasServed.map((a) => (
                <span key={a} className="bg-gray-100 border-2 border-black px-3 py-1 font-black text-sm">
                  {a}
                </span>
              ))}
            </div>
            <p className="font-bold text-gray-600 mt-4 text-sm">
              Don&apos;t see your area? We still help surrounding communities — contact us to confirm.
            </p>
          </div>
          <div className="bg-lime-400 p-8 neo-brutalist-border neo-brutalist-shadow transform -rotate-1">
            <h3 className="text-3xl font-black mb-4">GET A FREE QUOTE FOR {loc.displayName.toUpperCase()}</h3>
            <p className="font-bold mb-6">Fixed price in 24 hours. No obligation. WhatsApp or call us now.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="bg-black text-white px-6 py-3 neo-brutalist-border font-black">
                GET FREE QUOTE
              </Link>
              <a href="https://wa.me/27765207876" className="bg-white px-6 py-3 neo-brutalist-border font-black">
                WhatsApp 076 520 7876
              </a>
            </div>
          </div>
        </div>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      </div>
    </div>
  );
}
