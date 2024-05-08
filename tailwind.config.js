/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Jost'],
      },
      screens: {
        md: '880px',
        sm: '550px',
      },
    },
  },
  plugins: [],
};
