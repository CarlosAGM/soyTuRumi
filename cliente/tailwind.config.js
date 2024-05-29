/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "1059px",
      lg: "1070px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        verdeOriginal: "#256D72",
      },
    },
  },
  plugins: [],
};
