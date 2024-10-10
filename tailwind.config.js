/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "476px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "max-xs": { max: "320px" },
      "max-sm": { max: "375px" },
      "max-md": { max: "425px" },
      "max-lg": { max: "457px" },
      "max-sm-tablet": { max: "600px" },
      "max-md-tablet": { max: "768px" },
      "max-lg-tablet": { max: "820px" },
      "max-laptop": { max: "1024px" },
      "max-lg-laptop": { max: "1280px" },
      "max-xl": { max: "1440px" },
      "max-2xl": { max: "1536px" },
    },
    extend: {
      colors: {
        // Dark Scheme Colors
        themebody: "#0E2342", // Dark Blue
        white: "#FFFFFF", // White
        background: "#181C14", // Dark Olive Green
        surface: "#3C3D37", // Charcoal Grey
        primary: "#ECDFCC", // Light Cream
        secondary: "#697565", // Sage Green

        // Text Colors
        textPrimary: "#ECDFCC", // Light Cream
        textSecondary: "#697565", // Sage Green
        textMuted: "#3C3D37", // Dark Charcoal

        // Additional Colors
        dark: "rgb(24, 28, 20)", // Dark Olive Green
        mediumDark: "rgb(60, 61, 55)", // Charcoal Grey
        mutedText: "rgb(105, 117, 101)", // Muted Olive Green
        lightText: "rgb(236, 223, 204)", // Light Cream
      },
    },
  },
  plugins: [],
};
