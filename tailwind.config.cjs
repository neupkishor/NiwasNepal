module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A91919',
          700: '#901F00',
          800: '#742700',
        },
        gold: {
          DEFAULT: '#DFA426',
        },
        brand: {
          DEFAULT: '#A91919',
          dark: '#901F00',
          darker: '#742700',
          gold: '#DFA426',
        },
        site: {
          black: '#000000',
          white: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
