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
      maxWidth: {
        "100": "400px",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
