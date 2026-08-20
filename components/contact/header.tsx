import HighlightedText from "@/components/shared/highlighted-text";

export default function ContactHeader() {
  return (
    <div className="text-center mb-16">
      <div className="bg-purple-500 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform rotate-1 mb-6">
        GET IN TOUCH
      </div>
      <h1 className="text-5xl lg:text-7xl font-black mb-6">
        <span className="block transform -rotate-1">FREE WEBSITE QUOTE</span>{" "}
        <span className="block text-blue-600 transform rotate-1">
          IN MABOLOKA
        </span>{" "}
        <span className="block text-lime-500 transform -rotate-1">
          &amp; SOSHANGUVE
        </span>
      </h1>
      <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto leading-normal md:leading-[1.7]">
        Ready to transform your business online? Get a
        <HighlightedText className="bg-lime-400 mx-2">
          FREE QUOTE
        </HighlightedText>
        in 24 hours!
      </p>
    </div>
  );
}
