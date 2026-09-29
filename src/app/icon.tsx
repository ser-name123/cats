import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation matching the CATS Logo
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#030712",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "1.5px solid #0284c7",
          boxShadow: "0 0 10px rgba(56, 189, 248, 0.8)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="26"
          height="26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cyberBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="cyanAccent" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>

          {/* Outer ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#cyberBlueGrad)"
            strokeWidth="5"
            strokeDasharray="180 30 20 10"
          />

          {/* Main 3D Swirled 'C' Logo Emblem */}
          <path
            d="M 68 24 C 55 14 36 17 24 30 C 12 43 14 65 28 77 C 42 89 66 85 75 72 C 78 68 83 71 80 76 C 68 93 39 96 21 82 C 3 67 3 39 19 22 C 34 7 60 4 75 16 C 80 20 74 27 68 24 Z"
            fill="url(#cyberBlueGrad)"
          />

          {/* Inner Cyan Curve */}
          <path
            d="M 64 36 C 54 28 40 30 32 39 C 24 48 25 61 34 68 C 43 76 58 74 65 65 C 68 62 72 65 69 68 C 60 80 40 81 27 70 C 15 60 15 42 26 30 C 37 19 55 17 67 27 C 70 30 67 38 64 36 Z"
            fill="url(#cyanAccent)"
          />

          {/* Nodes */}
          <circle cx="75" cy="18" r="4" fill="#67e8f9" />
          <circle cx="75" cy="72" r="3.5" fill="#38bdf8" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
