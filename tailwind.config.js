/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        navbar: "#F2F4F7",
        side: "#626B79",
        primary: "#232933",
        warn: "#FBF3DD",
        error: "#DB8000",
        empty: "#FDECEE",
        hover: "#F7601A",
        icon: "#D0D6DD",
        orange: "#f7601a",
        graySecondary: "#626B79",
        input: "#D0D6DD"
      },
      margin: {
        38: "38px"
      }
    },
  },
  plugins: [],
};
