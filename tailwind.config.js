module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: "#FF7E1B",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
      gray: "#e4e9f2",
    },

    extend: {
      colors: {
        lightBlack: "#69707D",
      },
      screens: {
        tablet: "480px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        appear: "appear 1s linear",
      },

      minHeight: {
        64: "16rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
