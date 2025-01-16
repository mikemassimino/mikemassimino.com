/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      almostwhite: "#FEFEFE",
      dimwhite: "#F3F2F2",
      dimmerwhite: "#D9D9D9",
      lightgray: "#B8B8B8",
      gray: "#5F5F5F",
      gray2: "#171717",
      red: "#E0383E",
      yellow: "#F0CB78",
      blue: "#083D87",
      orange: "#E79F5A",
    },
    extend: {
      // screens: {
      //   md: "790px",
      // },
      backgroundImage: {
        "hero-gradient": "url('src/assets/Frame 1.svg')",
      },
      fontSize: {
        header: "2rem",
        body: "0.875rem",
      },
      fontFamily: {
        exo: ['"Exo 2 Variable"'],
        reddit: ['"Reddit Sans Variable"'],
        jost: ['"Jost Variable"'],
      },
      gridTemplateRows: {
        hero: "repeat(5, minmax(80px, auto));",
        meet: "repeat(9, minmax(auto));",
        meetMd: "repeat(9, minmax(5px, auto));",
      },
    },
  },
  plugins: [],
};
