import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/illustrations/LogoMark";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: 7,
        }}
      >
        <LogoMark idPrefix="favicon" width={26} height={26} />
      </div>
    ),
    size,
  );
}
