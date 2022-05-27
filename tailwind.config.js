module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softBlue: "rgba(88, 204, 237, 99%)",
        softBlueLight: "rgba(88, 204, 237, 29%)",
        lightBlue: "rgb(56, 149, 211)",
        meduimBlue: "rgb(18, 97, 160)",
        darkBlue: "hsl(228, 39%, 23%)",
        softGrey: "rgba(192,197,206, 10%)",
        lightGrey: "rgb((167,173,186))",
        dimGrey: "rgb(101,115,126)",
        meduimGrey: "rgb(79,91,102)",
        darkGrey: "rgb(52,61,70)",
        white: "rgb(255, 255, 255)",
        black: "rgb(0,0,0)",
        accent: "hsl(12, 88%, 59%)",
        accentLight: "hsla(12, 88%, 59%, 29%)",
      },
    },
  },
  plugins: [],
};
