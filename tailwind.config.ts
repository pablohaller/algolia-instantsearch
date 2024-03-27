import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: { DEFAULT: "#d4bc90", dark: "#948465", light: "#e1d0b1" },
        anemo: "#75c3a9",
        cryo: "#a0d7e4",
        dendro: "#a5c83b",
        electro: "#b18fc2",
        geo: "#fab72e",
        hydro: "#4cc2f1",
        pyro: "#f07a35",
        text: "#eee5de",
        "background-primary": "#3e4557",
        "background-secondary": "#383f4f",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
