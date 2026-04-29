// app/services/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SERVICE_META: Record<
  string,
  { label: string; icon: string; colour: string }
> = {
  "web-development": {
    label: "Web Development",
    icon: "🌐",
    colour: "#1a1a2e",
  },
  "mobile-development": {
    label: "Mobile Development",
    icon: "📱",
    colour: "#0f2027",
  },
  "brand-identity": { label: "Brand Identity", icon: "🎨", colour: "#1a0a2e" },
  "digital-marketing": {
    label: "Digital Marketing",
    icon: "📈",
    colour: "#0a1628",
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const meta = SERVICE_META[slug] ?? {
    label: "Our Services",
    icon: "💡",
    colour: "#000000",
  };

  return new ImageResponse(
    <div
      style={{
        background: meta.colour,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        gap: 24,
      }}
    >
      <div style={{ fontSize: 72 }}>{meta.icon}</div>
      <div
        style={{
          fontSize: 52,
          fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "-1px",
        }}
      >
        {meta.label}
      </div>
      <div style={{ fontSize: 22, color: "#aaaaaa" }}>
        Bold solutions for South African businesses
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 32,
          right: 48,
          fontSize: 18,
          fontWeight: 700,
          color: "#555555",
          letterSpacing: "3px",
        }}
      >
        MOGEN
      </div>
    </div>,
    { ...size },
  );
}
