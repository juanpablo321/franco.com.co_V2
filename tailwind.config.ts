import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF8",
          100: "#FFF9ED",
          200: "#FFF3DB",
        },
        charcoal: {
          800: "#2A2A2A",
          900: "#1A1A1A",
        },
        purple: {
          deep: "#4A2C6A",
          accent: "#6B3FA0",
          light: "#8B6BB5",
        },
        gold: {
          muted: "#B8963E",
          light: "#D4AF5A",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Source Sans 3", "system-ui", "sans-serif"],
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
