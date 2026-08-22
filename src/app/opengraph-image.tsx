import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0c0e12",
          color: "#e8eaed",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#3d8bfd",
            marginBottom: 24,
          }}
        >
          Ship Log
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, marginBottom: 16 }}>
          Shwet Gaur
        </div>
        <div style={{ fontSize: 32, color: "#8b9298", maxWidth: 900 }}>
          AI/ML engineer — LangGraph agents, RAG, production APIs
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
            fontSize: 22,
            color: "#22c55e",
          }}
        >
          <span>● 2 LIVE DEMOS</span>
          <span style={{ color: "#3d8bfd" }}>● OPEN SOURCE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
