"use client";

import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "../Icon";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="px-8 tablet:px-10 desktop:px-32 h-20 flex justify-between tablet:justify-center desktop:justify-between items-center  bg-stone-50 tracking-wider text-xl">
        <Navigation pathname={pathname} />
        <button
          className="cursor-pointer tablet:hidden"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <Icon name="menu" className="stroke-orange-600 fill-none" />
        </button>
      </div>
      <MobileMenu isOpen={menuOpen} close={closeMenu} />
    </>
  );
};

export default Header;
