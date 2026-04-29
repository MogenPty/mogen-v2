import Image from "next/image";
import { redirect } from "next/navigation";
import DrMahlanguShowcase from "@/components/showcase/dr-mahlangu";
import DrNkosiShowcase from "@/components/showcase/dr-nkosi";
import TownshipPayShowcase from "@/components/showcase/township-pay";
import { portfolioItems } from "@/data/portfolio";
import { BASE_KEYWORDS } from "@/data/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.fullDescription,
    keywords: [
      ...(project.tags ?? project.scope.map((f) => f.toLowerCase())),
      ...project.technologies.map((t) => t.toLowerCase()), // "react", "tailwind css" etc.
      project.category.toLowerCase(), // "local business", "non-profit" etc.
      `${project.category.toLowerCase()} website south africa`,
      `${project.category.toLowerCase()} web design`,
      ...BASE_KEYWORDS,
    ],
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `/showcase/${project.slug}`,
    },
    openGraph: {
      url: `/showcase/${project.slug}`,
      type: "website",
    },
  };
}

export default async function Showcase({ params }: Props) {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    redirect("/portfolio");
  }

  switch (slug) {
    case "dr-mahlangu":
      return <DrMahlanguShowcase />;
    case "dr-nkosi-practice":
      return <DrNkosiShowcase />;
    case "townshippay":
      return <TownshipPayShowcase />;
    default:
      // Generic client showcase template for other clients
      return (
        <div className="min-h-screen bg-white">
          {/* Header */}
          <header className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-black mb-4">{project.title}</h1>
              <p className="text-xl font-bold text-gray-300">
                {project.category} • Professional Website
              </p>
            </div>
          </header>

          {/* Main Content */}
          <main className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Hero Section */}
              <section className="text-center mb-16">
                <Image
                  width={1920}
                  height={1080}
                  src={project.image}
                  alt={`${project.title} website`}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl mb-8"
                />
                <h2 className="text-4xl font-black mb-6">
                  Welcome to {project.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {project.fullDescription}
                </p>
              </section>

              {/* Services/Features Section */}
              <section className="mb-16">
                <h3 className="text-3xl font-black mb-8 text-center">
                  Our Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {project.scope.map((service) => (
                    <div
                      key={service}
                      className="bg-gray-50 p-6 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold mb-3">{service}</h4>
                      <p className="text-gray-600">
                        Professional {service.toLowerCase()} services tailored
                        to your needs.
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-gray-900 text-white p-12 rounded-lg text-center">
                <h3 className="text-3xl font-black mb-6">Get in Touch</h3>
                <p className="text-xl mb-8">
                  Ready to work with {project.title}? Contact us today!
                </p>
                <div className="space-y-4">
                  <p className="text-lg">
                    <strong>Email:</strong> contact@
                    {project.slug.replace("-", "")}.com
                  </p>
                  <p className="text-lg">
                    <strong>Phone:</strong> +27 (0)11 123 4567
                  </p>
                </div>
              </section>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-gray-100 py-8 text-center text-gray-600">
            <p>&copy; 2024 {project.title}. All rights reserved.</p>
            <p className="text-sm mt-2">Website designed by MOGEN</p>
          </footer>
        </div>
      );
  }
}
