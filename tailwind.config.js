/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleGradient: "#8A2BE2",
        greenGradient: "#32CD32",
      },
    },
  },
  plugins: [],
}

