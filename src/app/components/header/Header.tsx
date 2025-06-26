"use client";

import React, { type FC, useState } from "react";
import { usePathname } from "next/navigation";

import Icon from "../Icon";
import Navigation from "../navigation/Navigation";
import MobileMenu from "./MobileMenu";

const Header: FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="px-8 tablet:px-10 desktop:px-32 h-20 flex items-center text-xl">
        <Navigation pathname={pathname} />
        <button
          className="cursor-pointer tablet:hidden"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <Icon name="menu" className="stroke-accent fill-none" />
        </button>
      </div>
      <MobileMenu isOpen={menuOpen} close={closeMenu} />
    </>
  );
};

export default Header;
