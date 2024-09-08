import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      line: {
        default: "#06c755",
        hover: "#05b34c",
        active: "#048b3b",
      },
    },
  },
  plugins: [],
};
export default config;
