import { styled } from "@mui/material/styles";
import Link from "next/link";

export const HeaderNavContainer = styled("nav")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  top: "20px",
  gap: "40px",
  justifyContent: "center",
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    gap: "80px",
    justifyContent: "center",
  },

  [theme.breakpoints.up("lg")]: {
    justifyContent: "flex-end",
    right: "80px",
    width: "100%",
  },
}));

export const HeaderNavLinkStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
  textDecoration: "none",
  paddingBottom: 2,
  fontWeight: 400,
  borderBottom: active ? `1px solid black` : `1px solid transparent`,
}));
