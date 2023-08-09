/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
    },
    extend: {
      width: {
        1065: "1065px",
        71.993: "71.993px",
        370: "370px",
        15.55: "15.55px",
      },
      height: {
        1065: "1065px",
        15.55: "15.55px",
      },
      colors: {
        "rectangle-color": "#E9E9E9",
        "search-input": "var(--f-4-f-4-f-4, #F4F4F4)",
        "light-purple": "var(--a-445-ed, #A445ED);",
      },
    },
  },
  plugins: [],
};
