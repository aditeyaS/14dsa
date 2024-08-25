/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      base: {
        DEFAULT: "hsl(var(--base))",
        1: "hsl(var(--base-1))",
        2: "hsl(var(--base-2))",
        content: "hsl(var(--base-content))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        content: "hsl(var(--primary-content))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
      },
      yellow: {
        DEFAULT: "hsl(var(--yellow))",
      },
      green: {
        DEFAULT: "hsl(var(--green))",
      },
    },
    extend: {},
  },
  plugins: [],
};
