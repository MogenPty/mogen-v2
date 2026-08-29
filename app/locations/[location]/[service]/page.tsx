import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackLink from "@/components/shared/back-link";
import ServiceDetails from "@/components/service/service-details";
import Technologies from "@/components/shared/technologies";
import { getLocation, getLocationServiceCombos } from "@/data/locations";
import { services } from "@/data/services";
import { SERVICE_DESCRIPTIONS } from "@/data/seo";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mogen.co.za";

interface Props {
  params: Promise<{ location: string; service: string }>;
}

export async function generateStaticParams() {
  return getLocationServiceCombos().map(({ location, service }) => ({
    location,
    service,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locSlug, service: svcSlug } = await params;
  const loc = getLocation(locSlug);
  const svc = services.find((s) => s.slug === svcSlug);
  if (!loc || !svc || !loc.services.includes(svcSlug)) {
    return { title: "Not Found", robots: { index: false, follow: false } };
  }

  const title = `${svc.title} in ${loc.displayName} | ${loc.name} | Mogen`;
  const description =
    loc.slug === "maboloka" && svc.slug === "seo"
      ? `Local SEO for Maboloka businesses. Google Business Profile + on-page SEO from Tambo Section. Free quote in 24 hours.`
      : loc.slug === "soshanguve" && svc.slug === "seo"
        ? `SEO for Soshanguve businesses. Get found on Google from Block Y. Local SEO from R2,000.`
        : `${svc.description} Tailored for ${loc.displayName} — ${loc.streetAddress}, ${loc.postalCode}. Packages from R2,999.`;

  return {
    title,
    description: SERVICE_DESCRIPTIONS[svc.slug] ?? description,
    alternates: { canonical: `/locations/${loc.slug}/${svc.slug}` },
    openGraph: {
      url: `/locations/${loc.slug}/${svc.slug}`,
      type: "website",
      title,
      description,
    },
    keywords: [`${svc.title.toLowerCase()} ${loc.name}`, `${svc.slug} ${loc.name}`, `mogen ${loc.name}`],
  };
}

export default async function LocationService({ params }: Props) {
  const { location: locSlug, service: svcSlug } = await params;
  const loc = getLocation(locSlug);
  const svc = services.find((s) => s.slug === svcSlug);

  if (!loc || !svc || !loc.services.includes(svcSlug)) notFound();

  // Build location-aware intro
  const locationIntro = `<div class="bg-blue-600 text-white p-4 neo-brutalist-border font-black text-sm mb-6">SERVING ${loc.displayName.toUpperCase()} — ${loc.streetAddress}, ${loc.name} ${loc.postalCode} · ${loc.province}</div><p class="font-bold text-gray-700">This ${svc.title.toLowerCase()} offer is tailored for businesses in <strong>${loc.displayName}</strong> and surrounding areas (${loc.areasServed.join(", ")}). We combine the national Mogen process with local context — fast mobile-first delivery, WhatsApp-first contact, and clear fixed pricing.</p>`;

  const combinedContent = `${locationIntro}${svc.content ?? ""}`;

  // JSON-LD
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE}/locations` },
      { "@type": "ListItem", position: 3, name: loc.displayName, item: `${BASE}/locations/${loc.slug}` },
      {
        "@type": "ListItem",
        position: 4,
        name: `${svc.title} in ${loc.displayName}`,
        item: `${BASE}/locations/${loc.slug}/${svc.slug}`,
      },
    ],
  };

  const serviceLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${svc.title} in ${loc.displayName}`,
    serviceType: svc.title,
    provider: { "@type": "ProfessionalService", name: "Mogen Pty Ltd", url: BASE },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: loc.coordinates.latitude,
        longitude: loc.coordinates.longitude,
      },
      geoRadius: "30000",
      description: `${loc.displayName}, ${loc.areasServed.join(", ")}`,
    },
    description: svc.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.streetAddress,
      addressLocality: loc.name,
      postalCode: loc.postalCode,
      addressRegion: loc.province,
      addressCountry: loc.country,
    },
  };

  if (svc.slug === "web-development" && svc.packages) {
    serviceLd.offers = {
      "@type": "AggregateOffer",
      priceCurrency: "ZAR",
      lowPrice: "2999",
      highPrice: "14999",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    };
  }

  const otherServices = services.filter((s) => loc.services.includes(s.slug) && s.slug !== svc.slug);

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackLink text={`Back to ${loc.displayName}`} link={`/locations/${loc.slug}`} />

        {/* Header */}
        <div className="text-center mb-12">
          <div className={`${svc.color} text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform -rotate-1 mb-6`}>
            {svc.category?.toUpperCase()} · {loc.displayName.toUpperCase()}
          </div>
          <h1 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="block transform -rotate-1">{svc.title}</span>
            <span className="block text-purple-500 text-3xl lg:text-4xl mt-2">IN {loc.displayName.toUpperCase()}</span>
          </h1>
          <p className="text-xl font-bold text-gray-600 max-w-3xl mx-auto">{svc.description}</p>
          <p className="font-bold text-gray-500 mt-3 text-sm">
            {loc.streetAddress}, {loc.name} · {loc.postalCode} · {loc.telephone}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <ServiceDetails
            title={`${svc.title} — ${loc.displayName}`}
            content={combinedContent}
            description={`${svc.description} — Local delivery for ${loc.displayName}.`}
            image={svc.image}
            packages={svc.slug === "web-development" || svc.slug === "seo" ? svc.packages : undefined}
            gallery={svc.gallery}
          />

          <div className="space-y-8">
            <Technologies title="Methodologies" technologies={svc.technologies ?? []} />

            {/* Local trust + NAP */}
            <div className="bg-white p-6 neo-brutalist-border neo-brutalist-shadow">
              <h3 className="font-black text-lg mb-3">VISIT US IN {loc.displayName.toUpperCase()}</h3>
              <div className="font-bold text-sm space-y-1 text-gray-700">
                <div>{loc.streetAddress}</div>
                <div>
                  {loc.name}, {loc.province} {loc.postalCode}
                </div>
                <div>{loc.country}</div>
                <div className="pt-2">
                  <a href={`tel:${loc.telephone}`} className="text-purple-500">
                    {loc.telephone}
                  </a>
                  {" · "}
                  <a href={`mailto:${loc.email}`} className="text-purple-500">
                    {loc.email}
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <Link href="/contact" className="bg-lime-400 px-4 py-2 neo-brutalist-border font-black text-sm">
                  GET QUOTE
                </Link>
                <a href={`https://wa.me/${loc.telephone.replace("+", "")}`} className="bg-black text-white px-4 py-2 neo-brutalist-border font-black text-sm">
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Other services at this location */}
            {otherServices.length > 0 && (
              <div className="bg-white p-6 neo-brutalist-border neo-brutalist-shadow">
                <h3 className="font-black mb-3">OTHER SERVICES IN {loc.displayName.toUpperCase()}</h3>
                <ul className="space-y-2">
                  {otherServices.map((os) => (
                    <li key={os.slug}>
                      <Link
                        href={`/locations/${loc.slug}/${os.slug}`}
                        className="font-black text-purple-500 hover:underline"
                      >
                        {os.title} in {loc.displayName} →
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={`/locations/${loc.slug}`} className="font-bold text-sm text-gray-600 mt-3 inline-block">
                  View all services in {loc.displayName} →
                </Link>
              </div>
            )}

            {/* Link back to national service */}
            <div className="bg-gray-100 p-6 neo-brutalist-border">
              <p className="font-bold text-sm text-gray-600">
                Also available nationally:{" "}
                <Link href={`/services/${svc.slug}`} className="font-black text-black underline">
                  {svc.title} (all areas)
                </Link>
              </p>
            </div>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      </div>
    </div>
  );
}
