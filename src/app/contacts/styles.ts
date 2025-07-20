import { styled } from "@mui/material/styles";
import { Link, Stack } from "@mui/material";

import { SectionWithPaddingStyled } from "../styles/styles";

export const ContactContainerStyled = styled(SectionWithPaddingStyled)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    paddingTop: "120px",
    paddingBottom: "40px",

    [theme.breakpoints.up("sm")]: {
      paddingTop: "200px",
      paddingBottom: "80px",
    },
  }),
);

export const EmailLinkStyled = styled(Link)({
  color: "inherit",
  textDecoration: "underline",
  wordBreak: "break-all",
});

export const DownloadButtonStyled = styled(Link)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  width: "fit-content",
  alignItems: "center",
  padding: "8px 16px",
  borderRadius: "8px",

  border: `1px solid ${theme.palette.text.primary}`,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },

  "&:hover": {
    scale: "105%",
  },
}));

export const DownloadSectionStyled = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  gap: "8px",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
