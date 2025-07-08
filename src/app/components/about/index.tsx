"use client";
import React, { type FC } from "react";

import { Typography } from "@mui/material";
import {
  AboutItemStyled,
  AboutSectionStyled,
  ExperienceItemStyled,
} from "./styles";

const About: FC = () => (
  <AboutSectionStyled>
    <AboutItemStyled>
      <Typography variant="h2">About</Typography>
      <Typography variant="bodyRegular">
        I’m a developer working with TypeScript, React, and Node.js. I’m
        currently exploring Next.js and GraphQL, with plans to learn AWS and
        React Native soon. Before that, I spent 8 years in QA — leading teams,
        testing fintech and cybersecurity products, and twice making
        top-performer lists. That experience shaped my skills in teamwork,
        communication, and Scrum. I’ve led and contributed to both group and
        personal projects. This portfolio app was designed in Figma and built
        with Next.js — and I plan to add a backend with TypeScript, Express, and
        MongoDB to support new features.
      </Typography>
    </AboutItemStyled>
    <ExperienceItemStyled>
      <Typography variant="h2">Experience (Latest)</Typography>
      <Typography variant="bodyRegular">
        Feb 2025 - Present
        <br />
        Junior Fullstack Engineer at ApexTech
      </Typography>
      <Typography variant="bodyRegular">
        Jun 2024 - Feb 2025
        <br />
        Junior Frontend Engineer (Freelance)
      </Typography>
      <Typography variant="bodyRegular">
        Nov 2021 - Oct 2023
        <br />
        Senior QA Engineer at Viber (Rakuten)
      </Typography>
    </ExperienceItemStyled>
  </AboutSectionStyled>
);

export default About;
