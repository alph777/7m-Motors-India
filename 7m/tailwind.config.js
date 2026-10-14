/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0A0A0C",
          50: "#1E2028",
          100: "#181A22",
          200: "#121318",
          300: "#0E0F14",
          400: "#0A0A0C",
        },
        charcoal: {
          DEFAULT: "#181A22",
          dark: "#121318",
          card: "#181A22",
          border: "#2A2D3A",
          hover: "#222530",
        },
        silver: {
          DEFAULT: "#F1F5F9",
          bright: "#FFFFFF",
          muted: "#94A3B8",
          dark: "#64748B",
        },
        amber: {
          warm: "#F59E0B",
          glow: "rgba(245, 158, 11, 0.2)",
        }
      },
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        accent: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px rgba(255, 255, 255, 0.08)",
        "glow-amber": "0 0 30px rgba(245, 158, 11, 0.25)",
        metallic: "inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 10px 30px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
}
