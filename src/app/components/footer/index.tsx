"use client";
import React, { type FC } from "react";
import { usePathname } from "next/navigation";

import Socials from "../contacts/Socials";
import { FooterContainer, FooterSocialBlock, FooterTextStyled } from "./styles";

const Footer: FC = () => {
  const pathname = usePathname();

  if (pathname === "/contacts") return null;

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
