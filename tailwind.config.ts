import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl' : '1536px',
      '3xl' : '1990px'
    },
    colors: {
      primary: '#FD7401',
      secondary: '',
      sucess: '#0BA02C',
      bgSuccess : '#B4FFC5',
      danger: '',
      info: '',
      fontColor: '#BABABF',
      light : '#FD7401',
      dark : '#242535',
      darkHeader: '#181A2A',
      black: '#000',
      white: '#FFF',
      beige: '#F5F5DC',
      lightGray: '#F1F3F6',
      grayFirst : '#B4B4B8',
      graySecond: '#C7C8CC',
      grayThird: 'E3E1D9',
      grayFour : 'F2EFE5'
    },
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },

    },
  },
  plugins: [],
};
export default config;
