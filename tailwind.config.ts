import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "4rem",
      },
      colors: {
        theme: {
          light: "#f4c7b4",
          dark: "#07020a",
        },
        primary: {
          50: "#f1b6f7",
          100: "#e5b7f9",
          200: "#cdb6fc",
          300: "#b1b1fb",
          400: "#a3b6f2",
          500: "#8cade0",
          600: "#6d94c3",
          700: "#4a6d9d",
          800: "#294170",
          900: "#10183e",
        },
        secondary: {
          50: "#f4b5ec",
          100: "#f1b5f3",
          200: "#dbb4f1",
          300: "#c3adeb",
          400: "#a89fdf",
          500: "#8888cc",
          600: "#696eb0",
          700: "#474c8d",
          800: "#282965",
          900: "#130f38",
        },
        kiss: {
          50: "#f4b5b6",
          100: "#f3b5ba",
          200: "#f1b4bf",
          300: "#ebadbf",
          400: "#df9fb8",
          500: "#cc88aa",
          600: "#b06994",
          700: "#8d4779",
          800: "#65285a",
          900: "#380f36",
        },
        light: {
          50: "#f4e9b5",
          100: "#f3edb5",
          200: "#f0f1b4",
          300: "#e6ebad",
          400: "#dbdf9f",
          500: "#cccc88",
          600: "#b0a669",
          700: "#8d7447",
          800: "#653d28",
          900: "#38110f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
