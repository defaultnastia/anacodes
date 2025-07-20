import { styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";

export const FooterContainer = styled(Stack)(({ theme }) => ({
  padding: "20px",
  width: "calc(100% - 8px)",
  alignItems: "center",
  margin: "0 4px 4px",
  gap: "20px",
  border: `1px solid ${theme.palette.text.primary}`,

  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  [theme.breakpoints.up("lg")]: {
    padding: "20px 40px",
  },
}));

export const FooterTextStyled = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",

  [theme.breakpoints.up("lg")]: {
    textAlign: "left",
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
    textAlign: "center",
  },
}));
