import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoBase64 = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/logo-mark-180.png")).toString("base64")}`;

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
          background: "linear-gradient(135deg, #05070f 0%, #1a2f54 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoBase64} width={80} height={80} alt="" />
        <div style={{ display: "flex", marginTop: 40, fontSize: 56, fontWeight: 800, color: "white", maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#b8d2f1" }}>
          {siteConfig.name} — Employee Management · Attendance · Payroll
        </div>
      </div>
    ),
    size,
  );
}
