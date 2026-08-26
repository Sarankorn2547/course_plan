import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        river: "#1c7c8c",
        leaf: "#4f7d4f",
        sun: "#e7a33e",
      },
    },
  },
  plugins: [],
};

export default config;
