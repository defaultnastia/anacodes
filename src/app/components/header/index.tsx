"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/app/types";
import { HeaderNavContainer, HeaderNavLinkStyled } from "./styles";

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <HeaderNavContainer>
      <HeaderNavLinkStyled
        href={NAVIGATION.HOME}
        active={pathname === NAVIGATION.HOME}
      >
        Home
      </HeaderNavLinkStyled>
      <HeaderNavLinkStyled
        href={NAVIGATION.PROJECTS}
        active={pathname === NAVIGATION.PROJECTS}
      >
        Projects
      </HeaderNavLinkStyled>
      <HeaderNavLinkStyled
        href={NAVIGATION.CONTACTS}
        active={pathname === NAVIGATION.CONTACTS}
      >
        Contacts
      </HeaderNavLinkStyled>
    </HeaderNavContainer>
  );
};

export default HeaderNav;
