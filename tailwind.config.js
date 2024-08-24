/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      base: {
        DEFAULT: "hsl(var(--base))",
        content: "hsl(var(--base-content))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        content: "hsl(var(--primary-content))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
      },
    },
    extend: {},
  },
  plugins: [],
};
