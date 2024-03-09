import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsla(var(--light-primary))",
        },
        white: "hsl(var(--white))",
        black: "hsl(var(--black))",
        gray: {
          DEFAULT: "hsl(var(--gray))",
          foreground: "hsl(var(--light-gray))",
          "light-x2": "hsl(var(--light-gray-2x))",
          "light-3x": "hsl(var(--light-gray-3x))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          foreground: "hsl(var(--light-danger))",
        },
        success: {
          DEFUALT: "hsl(var(--success))",
          foreground: "hsl(var(--light-success))",
        },
        wraning: "hsl(var(--warning))",
        purple: "hsl(var(--purple))",
        blue: {
          light: "hsl(var(--light-blue))",
        },
        bacground: "hsl(var(--background))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
