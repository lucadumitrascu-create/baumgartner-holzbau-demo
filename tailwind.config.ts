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
        // holz darkened for small text on bone (5.4:1); holz itself is 3.35:1 there
        "holz-deep": "#8E5326",
        stone: "#4A4842",
        // labels on light grounds (5:1 on bone); chalk is for dark grounds only
        muted: "#6B675F",
        chalk: "#8B8680",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)"],
      },
    },
  },
  plugins: [],
};
export default config;
