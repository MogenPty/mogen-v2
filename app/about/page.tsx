import AboutCTA from "@/components/about/cta";
import AboutHeader from "@/components/about/header";
import AboutValues from "@/components/about/values";
// import AboutTeam from "@/components/about/team";

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
