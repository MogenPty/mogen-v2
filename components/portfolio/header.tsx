import HighlightedText from "@/components/shared/highlighted-text";

export default function PortfolioHeader() {
  return (
    <div className="text-center mb-16">
      <div className="bg-lime-400 text-black px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform -rotate-1 mb-6">
        OUR WORK
      </div>
      <h1 className="text-5xl lg:text-7xl font-black mb-6">
        <span className="block transform rotate-1">PROJECTS THAT</span>
        <span className="block text-purple-500 transform -rotate-1">
          DRIVE GROWTH
        </span>
      </h1>
      <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto leading-loose">
        Real results for real businesses. See how we&apos;ve helped companies
        just like yours
        <HighlightedText className="bg-purple-500 text-white ml-1">
          GROW ONLINE
        </HighlightedText>
      </p>
    </div>
  );
}
