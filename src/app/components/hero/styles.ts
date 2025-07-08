import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeroContainer = styled(Box)({
  height: "100vh",
  display: "flex",
  borderBottom: "1px solid black",
});
export const HeroCapture = styled(Stack)({
  height: "100%",
  width: "40%",
  display: "flex",
  gap: "48px",
  padding: "160px 20px",
  alignItems: "center",
});
export const HeroPhoto = styled("img")({
  height: "100%",
  width: "40%",
  objectFit: "cover",
});
export const HeroNavigation = styled(Box)({ height: "100%", width: "10%" });
