import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SectionWithPaddingStyled = styled(Box)(({ theme }) => ({
  padding: "24px 24px",

  [theme.breakpoints.up("sm")]: {
    padding: "32px 32px",
  },

  [theme.breakpoints.up("md")]: {
    padding: "40px 48px",
  },

  [theme.breakpoints.up("lg")]: {
    padding: "40px 120px",
  },
}));
