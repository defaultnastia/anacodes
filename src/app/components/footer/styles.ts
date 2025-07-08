import { styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";

export const FooterContainer = styled(Stack)(({ theme }) => ({
  padding: "20px",
  width: "calc(100% - 8px)",
  alignItems: "center",
  // border: `1px solid black`,
  margin: "0 4px 4px",
  backgroundColor: "var(--foreground)",
  [theme.breakpoints.up("sm")]: {
    padding: "20px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "20px 40px",
    flexDirection: "row",
    justifyContent: "space-between",
    // gap: "20px",
  },
}));

export const FooterTextStyled = styled(Typography)(({ theme }) => ({
  color: "var(--background)",
  width: "100%",
  textAlign: "right",

  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
    width: "30%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "30%",
  },
}));

export const FooterSocialBlock = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "right",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    textAlign: "center",
  },
}));
