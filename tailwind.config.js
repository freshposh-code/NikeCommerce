/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xm: "330px",
        xs: "500px",
        sm: "650px",
        md: "1060px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
