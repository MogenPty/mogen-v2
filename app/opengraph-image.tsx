// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MOGEN | Bold Web Solutions";
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
      }}
    >
      {/* Your logo / wordmark */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "-2px",
        }}
      >
        MOGEN
      </div>
      <div style={{ fontSize: 28, color: "#aaaaaa", marginTop: 16 }}>
        Bold Web Solutions
      </div>
      <div style={{ fontSize: 20, color: "#666666", marginTop: 12 }}>
        web development · branding · digital marketing
      </div>
    </div>,
    { ...size },
  );
}
