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
        ink: "#0E0E0C",
        bone: "#F4F1EA",
        holz: "#B8733E",
        forst: "#1A2818",
        stone: "#4A4842",
        chalk: "#8B8680",
      },
      fontFamily: {
        "archivo-black": ["var(--font-archivo-black)"],
        archivo: ["var(--font-archivo)"],
        inter: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
