import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import { SectionWithPaddingStyled } from "@/app/styles/styles";

export const AboutSectionStyled = styled(SectionWithPaddingStyled)(
  ({ theme }) => ({
    display: "flex",
    gap: "40px",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      gap: "40px",
    },

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      gap: "120px",
    },
  }),
);

export const AboutItemStyled = styled(Stack)(({ theme }) => ({
  width: "100%",
  gap: "20px",

  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
}));

export const ExperienceItemStyled = styled(Stack)(({ theme }) => ({
  width: "100%",
  gap: "20px",

  [theme.breakpoints.up("md")]: {
    width: "30%",
  },
}));
