/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "#14034c", // Deep/dark blue
          light: "#1ec6fd", // Light blue
          bright: "#4ceefc", // Bright/cyan blue
        },
        yellow: {
          bright: "#fdc22b", // Bright yellow
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
