import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
      'light-gray': '#d1d1d1',
      'deep-gray': '#808080',
      'dark-gray': '#606060',
    },
    borderOpacity: {
      light: '0.08',
    },
  },
  plugins: [],
};
export default config;
