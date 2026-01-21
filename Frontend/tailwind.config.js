/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        deepSeaBlue: "#1B3567",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "5xl-custom": ["40px", "100%"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts with MUI
  },
};
