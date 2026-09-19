import { ImageResponse } from "next/og";

export const alt =
  "Closemind Labs — Complete work. Across systems. Keep control. The private AI operating layer for the enterprise.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SocialImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#fcfcfa",
        color: "#171d27",
        padding: "58px 64px",
        fontFamily: "Geist",
      }}
    >
      <div style={{ display: "flex", fontSize: 27 }}>closemindlabs.</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 58,
          fontSize: 76,
          letterSpacing: "-4px",
          lineHeight: 1.08,
        }}
      >
        <div>Complete work.</div>
        <div>Across systems.</div>
        <div
          style={{ display: "flex", alignItems: "center", color: "#2153e9" }}
        >
          <div
            style={{
              width: 55,
              height: 38,
              borderLeft: "2px solid #2153e9",
              borderBottom: "2px solid #2153e9",
              marginRight: 20,
              marginBottom: 25,
            }}
          />
          Keep control.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          paddingTop: 24,
          borderTop: "1px solid #dce0e5",
          fontSize: 23,
        }}
      >
        The private AI operating layer for the enterprise.
      </div>
    </div>,
    size,
  );
}
