import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "4rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
