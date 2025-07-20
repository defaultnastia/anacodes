import { styled } from "@mui/material/styles";
import { List } from "@mui/material";

export const SocialsListStyled = styled(List)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",

  [theme.breakpoints.up("lg")]: {
    gap: "20px",
  },
}));

export const SocialsListItemStyled = styled(List)(({ theme }) => ({
  width: "fit-content",
  cursor: "pointer",

  "&:hover svg, &:focus svg": {
    fill: theme.palette.secondary.main,
  },
}));
