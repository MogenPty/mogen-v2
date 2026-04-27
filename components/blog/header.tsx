export default function BlogHeader() {
  return (
    <div className="text-center mb-16">
      <div className="bg-purple-500 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform -rotate-1 mb-6">
        THE MOGEN BLOG
      </div>
      <h1 className="text-5xl lg:text-7xl font-black mb-6">
        <span className="block text-black transform rotate-1">KNOWLEDGE</span>
        <span className="block text-lime-500 transform -rotate-1">IS</span>
        <span className="block text-blue-600 transform rotate-1">POWER</span>
      </h1>
      <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
        Free tips, guides, and insights to help you dominate the digital world.
      </p>
    </div>
  );
}
