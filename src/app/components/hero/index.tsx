"use client";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { type FC } from "react";
import {
  HeroCapture,
  HeroContainer,
  PlaceholderStyled,
  HeroPhoto,
} from "./styles";
import projectTheme from "@/app/styles/muiTheme";

const Hero: FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HeroContainer>
      <HeroCapture>
        <Typography variant={isDesktop ? "captionLarge" : "captionMedium"}>
          Anastasiia <br /> &nbsp; Drachuk
        </Typography>
        <Typography variant="h4">A Web Developer with QA Background</Typography>
      </HeroCapture>
      <HeroPhoto src="/images/hero.jpg" />
      <PlaceholderStyled />
    </HeroContainer>
  );
};

export default Hero;
