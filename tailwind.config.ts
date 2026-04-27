import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F2EE",
        surface: "#FAF8F5",
        dark: "#141810",
        primary: "#3D5A3E",
        gold: "#8A7A52",
        "gold-light": "#B4A06A",
        muted: "#7A8A72",
        "text-soft": "#2E3D2F",
        divider: "#E2E8DF",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
