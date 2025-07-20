import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { SectionWithPaddingStyled } from "@/app/styles/styles";

export const TechStackSection = styled(SectionWithPaddingStyled)(
  ({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "24px",

    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
    },
  }),
);

export const AccentSeparatorStyled = styled("div")(({ theme }) => ({
  height: "200px",
  width: "100%",
  marginBottom: "20px",

  backgroundImage: 'url("/images/backgroundStack.webp")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",

  [theme.breakpoints.up("sm")]: {
    height: "400px",
  },
  [theme.breakpoints.up("md")]: {
    width: "60%",
    marginBottom: "0",
  },
}));

export const HeaderContainerStyled = styled(Stack)({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  border: `1px solid black`,
  margin: "0 4px",
});

export const CategoryCard = styled(Box)({
  backgroundColor: "white",
  borderRadius: 0,
});

export const CategoryTitle = styled(Typography)({
  marginBottom: "20px",
});

export const ItemList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
});

export const Item = styled("li")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
