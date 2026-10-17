import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#05070d", panel: "#0b1020", accent: "#22d3ee", violet: "#a78bfa" } } },
  plugins: [],
};
export default config;
