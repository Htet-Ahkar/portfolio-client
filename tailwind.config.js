module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        blogMobileCard: "31.25rem",
      },
      fontFamily: {
        sans: ["Roboto Slab", "Roboto", "sans-serif"],
      },
      colors: {
        bg: "#FFFFFF",
        primary: "#000000",
        secondary: "#FFFFFF",
        primaryText: "#FFFFFF",
        secondaryText: "#000000",
        dark: {
          bg: "#000000",
          primary: "#FACC17",
          secondary: "#FFFFFF",
          primaryText: "#000000",
          secondaryText: "#FFFFFF",
        },
        success: "#156534",
        error: "#BE123C",
      },
    },
  },
  plugins: [],
};
