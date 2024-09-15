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
        gray: '#e9e9e9',
      },
    },
    borderOpacity: {
      light: '0.08',
    },
  },
  plugins: [],
};
export default config;
