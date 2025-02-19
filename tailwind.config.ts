import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lime: "hsl(163, 72%, 41%)",
          red: "hsl(356, 69%, 56%)",
        },
        social: {
          facebook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          youtube: "hsl(348, 97%, 39%)",
        },
        darkTheme: {
          bg: "hsl(230, 17%, 14%)",
          topBg: "hsl(232, 19%, 15%)",
          cardBg: "hsl(228, 28%, 20%)",
          text: "hsl(228, 34%, 66%)",
          whiteText: "hsl(0, 0%, 100%)",
        },
        lightTheme: {
          bg: "hsl(0, 0%, 100%)",
          topBg: "hsl(225, 100%, 98%)",
          cardBg: "hsl(227, 47%, 96%)",
          text: "hsl(228, 12%, 44%)",
          darkText: "hsl(230, 17%, 14%)",
          toggle: "hsl(230, 22%, 74%)",
        },
      },
      backgroundImage: {
        "instagram-gradient":
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        "toggle-gradient":
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
