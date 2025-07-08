import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TechStackSection = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "24px",

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    padding: "40px 120px",
  },
}));

export const AccentSeparatorStyled = styled("div")(({ theme }) => ({
  height: "100px",
  width: "60%",

  backgroundImage: 'url("/images/backgroundStack.webp")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",

  [theme.breakpoints.up("sm")]: {
    height: "400px",
  },
}));

export const HeaderContainerStyled = styled(Stack)(({ theme }) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  border: `1px solid black`,
  margin: "0 4px",
}));

export const CategoryCard = styled(Box)({
  backgroundColor: "white",
  borderRadius: 0,
  padding: "16px",
});

export const CategoryTitle = styled(Typography)({
  marginBottom: "8px",
  textAlign: "center",
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
