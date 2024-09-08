import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      line: {
        default: '#06c755',
      },
      primary: {
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
