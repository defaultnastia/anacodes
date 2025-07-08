"use client";
import { Typography } from "@mui/material";
import React, { type FC } from "react";
import {
  HeroCapture,
  HeroContainer,
  HeroNavigation,
  HeroPhoto,
} from "./styles";

const Hero: FC = () => (
  <HeroContainer>
    <HeroCapture>
      <Typography variant="captionLarge">
        Anastasiia <br /> &nbsp; Drachuk
      </Typography>
      <Typography variant="h4">A Web Developer with QA Background</Typography>
    </HeroCapture>
    <HeroPhoto src="/images/hero.jpg" />
    <HeroNavigation />
  </HeroContainer>
);

export default Hero;
