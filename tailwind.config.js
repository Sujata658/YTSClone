/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bkgprim: "rgb(var(--color-bg-primary) / <alpha-value>)",
        bkgsec: "rgb(var(--color-bg-secondary) / <alpha-value>)",
        bkgtert: "rgb(var(--color-bg-tertiary) / <alpha-value>)",

        textprim: "rgb(var(--color-text-primary) / <alpha-value>)",
        textsec: "rgb(var(--color-text-secondary) / <alpha-value>)",
        texttert: "rgb(var(--color-text-tertiary) / <alpha-value>)",
        
        webthemeprim: "rgb(var(--color-webtheme-primary) / <alpha-value>)",

        themeopp: "rgb(var(--color-theme-opposite) / <alpha-value>)"

      },
    },
  },
  plugins: [],
}