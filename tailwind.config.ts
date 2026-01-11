import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        "background-light": "#f6f7f8",
        "background-dark": "#010101",
        // V2 Design System
        obsidian: "#030303",
        charcoal: "#0a0a0a",
        surface: "#121212",
        glass: "rgba(255, 255, 255, 0.02)",
        "glass-hover": "rgba(255, 255, 255, 0.05)",
        "border-glass": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "pulse-slow": "pulseSlow 8s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
        "spin-slow": "spin-slow 10s linear infinite",
        "spin-slower": "spin-slow 15s linear infinite",
        "spin-slowest": "spin-slow 20s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 15s linear infinite",
      },
      backgroundImage: {
        "gradient-glow":
          "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)",
        "gradient-text":
          "linear-gradient(135deg, #FFFFFF 0%, #94a3b8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
