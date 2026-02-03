/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'], // Replace 'Inter' with your desired font
      // },
      backgroundImage: {
      //  "bgImage" : "url(/public/bgImage.png)"
      },
      colors: {
        "gray": "#80898F",
        "gray-dark": "#485966",
        "primary1": "#DCE6ED"
      },
      screens: {
        '3xl': '2050px',
        // => @media (min-width: 640px) { ... }
  
      },
      boxShadow: {
        "3xl": "-8px 8px 35.73px 1.82px rgba(138, 138, 138, 0.17)",
        "4xl": "-11.96px 11.96px 36.45px 7.98px rgba(138, 164, 191, 0.07)",

      }
    },
  },
  plugins: [],
};
