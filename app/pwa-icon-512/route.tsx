import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "24%",
          background: "linear-gradient(135deg, #0b1320 0%, #1c2f45 100%)",
          color: "#ffffff",
          fontSize: 200,
          fontWeight: 800,
          letterSpacing: -4,
          fontFamily: "Nunito, Arial, sans-serif",
        }}
      >
        ICJ
      </div>
    ),
    {
      width: 512,
      height: 512,
    },
  );
}
