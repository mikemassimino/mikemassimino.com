/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'gray': '#5F5F5F',
      'red': '#E0383E'
    },
    extend: {
      backgroundImage: {
        "hero-gradient": "url('src/assets/Frame 1.svg')",
      },
      fontSize: {
        header: "2rem",
        'body': "0.875rem",
      },
      fontFamily: {
        exo: ['"Exo 2 Variable"'],
        reddit: ['"Reddit Sans Variable"'],
        jost: ['"Jost Variable"'],
      },
      gridTemplateRows: {
        'hero': 'repeat(5, minmax(80px, auto));'
      }
    },
  },
  plugins: [],
};
