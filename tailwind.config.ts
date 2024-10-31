import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        stone: {
          450: "#BAA5A5",
          150: "rgba(245, 245, 244, 0.24)",
        },
        orange: {
          250: "#EBC8A7",
        },
      },
      minHeight: {
        "128": "32rem",
      },
      backgroundImage: {
        hero: "url('/images/hero.jpg')",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
