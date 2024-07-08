/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/src/assets/bg-header-desktop.svg')",
        mobile: "url('/src/assets/bg-header-mobile.svg')",
      },
      colors: {
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      boxShadow: {
        custom: "0px 10px 17px 1px #0000000f",
      },
    },
  },
  plugins: [],
};
