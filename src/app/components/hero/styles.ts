import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeroContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid black",
  },
}));

export const HeroCapture = styled(Stack)(({ theme }) => ({
  width: "100%",
  gap: "48px",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,

  [theme.breakpoints.up("md")]: {
    padding: "160px 20px",
    height: "100%",
    width: "40%",
  },
}));

export const HeroPhoto = styled("img")(({ theme }) => ({
  height: "50%",
  width: "100%",
  objectFit: "cover",

  [theme.breakpoints.up("md")]: {
    height: "100%",
    width: "40%",
  },
}));

export const PlaceholderStyled = styled(Box)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("lg")]: {
    display: "block",
    height: "100%",
    width: "20%",
  },
}));
