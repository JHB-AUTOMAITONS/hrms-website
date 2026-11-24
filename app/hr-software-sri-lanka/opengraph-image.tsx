import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "HR & Payroll Software for Businesses in Sri Lanka — Manitham HRMS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoBase64 = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/logo-mark-180.png")).toString("base64")}`;

const modules = ["Employee management", "Attendance", "Leave", "Payroll workflows"];

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
          padding: "72px 80px",
          background: "linear-gradient(135deg, #05070f 0%, #1a2f54 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logoBase64} width={64} height={64} alt="" />
          <div style={{ display: "flex", marginLeft: 20, fontSize: 30, fontWeight: 700, color: "#b8d2f1" }}>Manitham HRMS</div>
        </div>
        <div style={{ display: "flex", marginTop: 44, fontSize: 24, fontWeight: 700, color: "#dbb463", letterSpacing: 2 }}>
          HR SOFTWARE SRI LANKA
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 60, fontWeight: 800, color: "white", lineHeight: 1.1, maxWidth: 1000 }}>
          HR & Payroll Software for Businesses in Sri Lanka
        </div>
        <div style={{ display: "flex", marginTop: 40 }}>
          {modules.map((m) => (
            <div
              key={m}
              style={{
                display: "flex",
                marginRight: 14,
                padding: "10px 20px",
                borderRadius: 999,
                fontSize: 24,
                color: "#dbe8f8",
                border: "1px solid rgba(184,210,241,0.4)",
              }}
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
