"use client";

import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import NavigationMobile from "../navigation/NavigationMobile";
import Icon from "../Icon";

interface MobileMenuProps {
  isOpen: boolean;
  close: () => void;
}

const MobileMenu = ({ isOpen = false, close }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "fixed w-screen h-56 bg-gradient-accent overscroll-none duration-700 transition-all z-10",
        isOpen ? "top-0 opacity-100" : "top-[-224px] opacity-0"
      )}
    >
      <button
        className="absolute right-4 top-4 "
        onClick={() => {
          close();
        }}
      >
        <Icon name="close" size={24} className="fill-background" />
      </button>
      <NavigationMobile pathname={pathname} close={close} />
    </div>
  );
};

export default MobileMenu;
