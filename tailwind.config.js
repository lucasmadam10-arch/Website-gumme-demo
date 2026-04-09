/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00582d",
        accent: "#e2f33c",
        background: "#FAF9F6",
        conversion: "#E35235",
        mint: {
          page: "#e8f5ef",
          panel: "#cfe9d8",
        },
      },
      fontFamily: {
        display: ['"Outfit"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        quote: ['"Source Serif 4"', "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
