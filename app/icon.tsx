import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const logoBase64 = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/logo-mark-64.png")).toString("base64")}`;

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoBase64} width={32} height={32} alt="" />
      </div>
    ),
    size,
  );
}
