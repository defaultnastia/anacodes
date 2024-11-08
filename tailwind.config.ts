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
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1280px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        brightAccent: "var(--bright-accent)",
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
      width: {
        "140": "560px",
      },
      maxWidth: {
        "100": "400px",
      },
      boxShadow: {
        image:
          "-2px -2px 8px 2px #ffb147, 0 0 10px 2px #ff6c63, 2px 2px 10px 4px #a21caf",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
