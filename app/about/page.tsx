import AboutCTA from "@/components/about/cta";
import AboutHeader from "@/components/about/header";
import AboutValues from "@/components/about/values";
import { BASE_KEYWORDS } from "@/data/seo";
// import AboutTeam from "@/components/about/team";

export const metadata = {
  title: "About",
  description:
    "Discover MOGEN, your partner for web development, digital marketing, and tailored software solutions for SMEs in South Africa. Driven by integrity and innovation.",
  keywords: ["about mogen", ...BASE_KEYWORDS],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="bg-gray-50 py-5 md:py-10 lg:py-20">
      {/* Hero Section */}
      <AboutHeader />

      {/* Team Section */}
      {/* <AboutTeam /> */}

      {/* Values Section */}
      <AboutValues />

      {/* CTA Section */}
      <AboutCTA />
    </div>
  );
}
