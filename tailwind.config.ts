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
        holz: "#8B5E3C",
        stein: "#3A3532",
        kalk: "#F4F1EA",
        forst: "#2D3E2A",
        rost: "#A64B2A",
        beton: "#9A958D",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)"],
        inter: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
