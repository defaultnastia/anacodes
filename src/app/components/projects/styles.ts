import { List, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

import { SectionWithPaddingStyled } from "@/app/styles/styles";

export const ProjectSectionStyled = styled(SectionWithPaddingStyled)(
  ({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "20px",

    [theme.breakpoints.up("sm")]: {
      gap: "40px",
    },

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      gap: "60px",
    },
  })
);

export const ProjectDescriptionStyled = styled(Stack)(({ theme }) => ({
  gap: "28px",
  width: "100%",

  [theme.breakpoints.up("lg")]: {
    width: "800px",
  },
}));

export const ProjectHeaderStyled = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
  textTransform: "uppercase",
  fontSize: "20px",
}));

export const DemoContainerStyled = styled(Stack)(({ theme }) => ({
  position: "relative",
  minWidth: "100%",
  height: "280px",
  margin: "auto",

  [theme.breakpoints.up("md")]: {
    minWidth: "80%",
    width: "80%",
    height: "320px",
  },

  [theme.breakpoints.up("lg")]: {
    minWidth: "520px",
    width: "520px",
    height: "340px",
  },
}));

export const DemoLinksListStyled = styled(List)({
  display: "flex",
});

export const DemoLinkItemStyled = styled(ListItem)(({ theme }) => ({
  borderRight: `2px solid ${theme.palette.secondary.main}`,
  fontWeight: "bold",
  width: "fit-content",

  "&:last-of-type": {
    borderRight: "none",
  },

  "&:first-of-type": {
    paddingLeft: "0",
  },
}));

export const MobileDemoContainerStyled = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: "-20px",
  right: "0",
  display: "none",

  [theme.breakpoints.up("md")]: {
    display: "block",
  },

  [theme.breakpoints.up("lg")]: {
    top: "32px",
    right: "16px",
  },
}));

export const MobileDemoImgStyled = styled(Image)({
  position: "absolute",
  top: "12px",
  right: "8px",
  objectFit: "cover",
  height: "296px",
  width: "140px",
  borderRadius: "16px",
});

export const MobileDemoFrameStyled = styled(Image)({
  position: "relative",
  top: "0",
  left: "0",
  height: "320px",
  width: "160px",
});

export const WebDemoContainerStyled = styled(Stack)(({ theme }) => ({
  position: "relative",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "500px",
  },
}));

export const WebDemoImgStyled = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  height: "280px",
  borderRadius: "16px",
  // border: `1px solid ${theme.palette.text.disabled}`,
  boxShadow: `8px 8px 8px ${theme.palette.text.secondary}`,

  [theme.breakpoints.up("md")]: {
    position: "relative",
    top: "20px",
    left: "56px",
    width: "390px",
    height: "228px",
    transform: "none",
    // border: "none",
    boxShadow: "none",
  },
}));

export const WebDemoFrameStyled = styled(Image)(({ theme }) => ({
  position: "absolute",
  display: "none",

  [theme.breakpoints.up("md")]: {
    top: "0",
    left: "0",
    width: "500px",
    height: "280px",
    transform: "none",
    display: "block",
  },
}));

export const ProjectsListStyled = styled(List)({
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  paddingTop: "100px",
  paddingBottom: "80px",
});
