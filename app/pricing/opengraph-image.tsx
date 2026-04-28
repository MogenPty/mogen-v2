// app/pricing/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MOGEN Pricing — Websites from R2,999";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        gap: 40,
      }}
    >
      {/* Header */}
      <div
        style={{
          fontSize: 24,
          color: "#666666",
          letterSpacing: "6px",
          textTransform: "uppercase",
        }}
      >
        Transparent Pricing
      </div>

      {/* Packages row */}
      <div style={{ display: "flex", gap: 24, alignItems: "flex-end" }}>
        {/* Starter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#111111",
            borderRadius: 12,
            padding: "24px 28px",
            gap: 8,
          }}
        >
          <div style={{ fontSize: 16, color: "#888888", letterSpacing: "2px" }}>
            STARTER
          </div>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#ffffff" }}>
            R2,999
          </div>
        </div>

        {/* Professional — highlighted */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#ffffff",
            borderRadius: 12,
            padding: "32px 36px",
            gap: 8,
          }}
        >
          <div style={{ fontSize: 16, color: "#444444", letterSpacing: "2px" }}>
            PROFESSIONAL
          </div>
          <div style={{ fontSize: 48, fontWeight: 900, color: "#000000" }}>
            R8,999
          </div>
          <div style={{ fontSize: 13, color: "#666666" }}>MOST POPULAR</div>
        </div>

        {/* Premium */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#111111",
            borderRadius: 12,
            padding: "24px 28px",
            gap: 8,
          }}
        >
          <div style={{ fontSize: 16, color: "#888888", letterSpacing: "2px" }}>
            PREMIUM
          </div>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#ffffff" }}>
            R14,999
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ fontSize: 20, color: "#666666" }}>
        No hidden fees · Flexible payment options · All of South Africa
      </div>

      {/* Brand */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          right: 48,
          fontSize: 18,
          fontWeight: 700,
          color: "#444444",
          letterSpacing: "3px",
        }}
      >
        MOGEN
      </div>
    </div>,
    { ...size },
  );
}
