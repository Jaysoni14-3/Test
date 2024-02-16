/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#000000",
        "custom-blue": "#007bff",
        "custom-green": "#00fd89",
        "custom-gray": "#eaeaea",
        "custom-yellow": "#fecc00",
        "custom-paragraph-color": "#3A3736",
      },
      fontFamily: {
        lobsterTwo: ["Lobster Two", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
