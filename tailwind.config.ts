import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        pixels: '700', 
      },
    },
    colors:{
      cinza : '#BBBBBB',
      preto:'#000000',
      rosa:'#FFEEFA',
      branco: '#FFFFFF'
    },
    fontFamily: {
      sans: 'ui-sans-serif',
      serif: 'font-roboto',
      mono: 'ui-monospace',
      display: 'Oswald',
      body: '"Open Sans"'
    },
    fontWeight: {
      thin: '100',
      black: '900',
      normal:'400'
    }
  },
  plugins: [],
};
export default config;
