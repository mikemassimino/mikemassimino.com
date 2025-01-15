/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-gradient": "url('src/assets/Frame 1.svg')",
      },
      fontSize: {
        header: "2rem",
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
