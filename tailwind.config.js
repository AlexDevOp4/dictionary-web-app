/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      width: {
        1065: "1065px",
        71.993: "71.993px",
      },
      height: {
        1065: "1065px",
      },
      colors: {
        "rectangle-color": "#E9E9E9",
      },
    },
  },
  plugins: [],
};
