"use client";
import { createTheme } from "@mui/material/styles";
import { type CSSProperties } from "react";

export const COLORS = {
  BACKGROUND: "#ffffff",
  FOREGROUND: "#000000",
  FADED: "#a3a3a3",
  ACCENT: "#9e2c21",
} as const;

export const variants = [
  "bodyRegular",
  "bodyRegularBold",
  "bodySmall",
  "caption",
  "captionMedium",
  "captionLarge",
  "link",
] as const;

export type Variants = (typeof variants)[number];

declare module "@mui/material/styles" {
  interface TypographyVariants extends Record<Variants, CSSProperties> {}
  interface TypographyVariantsOptions
    extends Record<Variants, CSSProperties | undefined> {}
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides extends Record<Variants, true> {}
}

const bodyTemplate = {
  fontFamily: "Haskoy, sans-serif",
  fontSize: "16px",
  color: "var(--foreground)",
};

const accentTemplate = {
  fontFamily: "Scriptina",
  fontSize: "16px",
  color: "var(--foreground)",
};

const projectTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 481, // mobile
      md: 769, // tablet
      lg: 1281, // desktop
      xl: 1537,
    },
  },
  palette: {
    background: {
      default: COLORS.BACKGROUND,
    },
    text: {
      primary: COLORS.FOREGROUND,
      secondary: COLORS.FADED,
    },
    secondary: {
      main: COLORS.ACCENT,
    },
  },
  typography: {
    fontFamily: "Haskoy, sans-serif",
    bodySmall: { ...bodyTemplate, fontSize: "14px" },
    bodyRegular: { ...bodyTemplate },
    bodyRegularBold: {
      ...bodyTemplate,
      fontWeight: 500,
    },
    caption: {
      ...accentTemplate,
      fontSize: "16px",
    },
    captionMedium: {
      ...accentTemplate,
      fontSize: "56px",
    },
    captionLarge: {
      ...accentTemplate,
      fontSize: "96px",
      lineHeight: "100%",
    },
    h2: {
      ...bodyTemplate,
      textTransform: "capitalize",
    },
    h3: {
      ...bodyTemplate,
      textTransform: "uppercase",
      fontWeight: 200,
      fontSize: "24px",
      lineHeight: "100%",
      color: "var(--faded)",
    },
    h4: {
      ...bodyTemplate,
      textTransform: "uppercase",
      fontWeight: 100,
      lineHeight: "120%",
    },
    link: {
      ...bodyTemplate,
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "140%",
      textDecorationLine: "underline",
    },
  },
});
export default projectTheme;
