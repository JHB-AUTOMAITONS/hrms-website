import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1120 0%, #312e81 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#4f46e5",
            color: "white",
            fontSize: 36,
            fontWeight: 800,
          }}
        >
          M
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 56, fontWeight: 800, color: "white", maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#c7d2fe" }}>
          {siteConfig.name} — Employee Management · Attendance · Payroll
        </div>
      </div>
    ),
    size,
  );
}
