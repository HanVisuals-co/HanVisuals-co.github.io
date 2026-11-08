import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "hanvisuals | Creative Video Production & Web Applications";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#15171E",
          padding: "64px 76px",
          color: "#FDFCF9",
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(circle at 82% 22%, rgba(81, 184, 185, 0.22), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="24 8 116 152"
              width="68"
              height="68"
            >
              <defs>
                <clipPath id="og-prism">
                  <path d="M 45 18 L 125 76 C 133 82, 133 86, 125 92 L 45 150 C 37 156, 32 152, 32 142 L 32 26 C 32 16, 37 12, 45 18 Z" />
                </clipPath>
              </defs>
              <g clipPath="url(#og-prism)">
                <path d="M 28 60 L 28 110 L 60 95 L 60 75 Z" fill="#51B8B9" />
                <path d="M 28 10 L 80 10 L 60 75 L 28 60 Z" fill="#FFDC56" />
                <path d="M 80 10 L 140 84 L 100 84 L 60 75 Z" fill="#FA9F1B" />
                <path d="M 28 160 L 80 160 L 60 95 L 28 110 Z" fill="#FA7C83" />
                <path d="M 80 160 L 140 84 L 100 84 L 60 95 Z" fill="#EA4C56" />
              </g>
              <path
                d="M 64 61 L 92 81 C 95 83, 95 85, 92 87 L 64 107 C 61 109, 58 107, 58 103 L 58 65 C 58 61, 61 59, 64 61 Z"
                fill="#FDFCF9"
              />
            </svg>
            <span
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FDFCF9",
              }}
            >
              hanvisuals
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#1D202C",
              border: "1px solid rgba(253, 252, 249, 0.14)",
              borderRadius: "999px",
              padding: "10px 22px",
              fontSize: "20px",
              fontWeight: 700,
              color: "#51B8B9",
            }}
          >
            <span>9:16 Video &amp; Web Studio</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "920px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#FDFCF9",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Creating 9:16 videos &amp;</span>
            <span style={{ color: "#51B8B9" }}>modern web apps.</span>
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#CBD5E1",
              lineHeight: 1.4,
            }}
          >
            Commercial video editing, color grading, and interactive web
            development.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(253, 252, 249, 0.1)",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#94A3B8",
          }}
        >
          <span>@hanvisuals._</span>
          <span style={{ color: "#51B8B9", fontWeight: 700 }}>
            CapCut • Lightroom • Next.js
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
