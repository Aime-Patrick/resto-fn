/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        customDark: '#1F1D2B',
        primary: {
          DEFAULT: '#EA7C69',
          dark: "#1F1D2B",
          lighter: "#3D271C",
        },
        secondary: '#9288E0',
        white: "#FFFF",
        gray: {
          lighter: "#F9FAFC",
          DEFAULT: "#F2F3F5",
          darker: "#E2E4E6"
        }
      },
      boxShadow: {
        DEFAULT: '0 2px 24px 0 #ea7c695f',
        hover: '0 12px 48px 0 #ea7c6940'
      },
    },
  },
  plugins: [

  ],
}
