"use client";
import React, { type FC } from "react";

import Socials from "../contacts/Socials";
import { FooterContainer, FooterSocialBlock, FooterTextStyled } from "./styles";
import { Typography } from "@mui/material";

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterTextStyled variant="h3">Anastasiia Drachuk</FooterTextStyled>

      <FooterSocialBlock>
        <Socials />
      </FooterSocialBlock>

      <FooterTextStyled variant="bodyRegular">
        Junior full-stack developer, good in JavaScript and TypeScript, React,
        and comfortable with Node.js and the fundamentals of API.
      </FooterTextStyled>
    </FooterContainer>
  );
};

export default Footer;
