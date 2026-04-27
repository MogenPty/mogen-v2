import Link from "next/link";
import { Button } from "../ui/button";

export default function FreeResources() {
  return (
    <div className="bg-lime-400 text-black p-8 neo-brutalist-border neo-brutalist-shadow transform rotate-1">
      <h3 className="text-2xl font-black mb-4">FREE RESOURCES</h3>
      <p className="font-bold mb-4">
        Download our helpful guides while you wait!
      </p>

      <div className="space-y-3">
        <Link href={"/resources/website-checklist.md"} download>
          <Button
            variant="outline"
            className="w-full hover:cursor-pointer neo-brutalist-border neo-brutalist-shadow-sm bg-white hover:bg-gray-100 font-black"
          >
            📋 WEBSITE CHECKLIST
          </Button>
        </Link>
        <Link href={"/resources/brand-guide-template.md"} download>
          <Button
            variant="outline"
            className="w-full hover:cursor-pointer neo-brutalist-border neo-brutalist-shadow-sm bg-white hover:bg-gray-100 font-black"
          >
            🎨 BRAND GUIDE TEMPLATE
          </Button>
        </Link>
        <Link href={"/resources/seo-starter-kit.md"} download>
          <Button
            variant="outline"
            className="w-full hover:cursor-pointer neo-brutalist-border neo-brutalist-shadow-sm bg-white hover:bg-gray-100 font-black"
          >
            📈 SEO STARTER KIT
          </Button>
        </Link>
      </div>
    </div>
  );
}
