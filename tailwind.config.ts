import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4F46E5",
        secondary: "#06B6D4",
      },
      animation: {
        "marquee-left": "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
        none: "none",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.33333%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-33.33333%)" },
          "100%": { transform: "translateX(0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "var(--tw-opacity)" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".pause": {
          "animation-play-state": "paused",
        },
        ".running": {
          "animation-play-state": "running",
        },
      });
    }),
  ],
};

export default config;
