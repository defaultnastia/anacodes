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
        fadedAccent: "var(--faded-accent)",
      },
      minHeight: {
        "128": "32rem",
      },
      width: {
        "140": "560px",
        calc: "calc((100% - 48px) / 2)",
      },
      maxWidth: {
        "100": "400px",
        "140": "560px",
        "1/2": "50%",
        "1/3": "33%",
      },
      minWidth: {
        "1/3": "33%",
      },
      boxShadow: {
        image:
          "-2px -2px 8px 2px #ffb147, 0 0 10px 2px #ff6c63, 2px 2px 10px 4px #a21caf",
        theme: "0 4px 12px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
