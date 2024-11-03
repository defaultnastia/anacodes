"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Icon from "./Icon";

const Header = () => {
  const pathname = usePathname();

  const defaultLink =
    "border-b-2 border-transparent px-0 mx-2 hover:border-accent hover:px-2 hover:mx-0 ";
  const activeLink = "text-accent border-b-2 border-transparent px-0 mx-2";

  return (
    <div className="px-8 tablet:px-10 desktop:px-32 h-20 flex justify-between tablet:justify-center desktop:justify-between items-center  bg-stone-50 tracking-wider text-xl">
      <div className="tablet:hidden desktop:flex items-center gap-4">
        <Image
          src="/images/avatar.png"
          width={64}
          height={64}
          alt="Avatar"
          className="block h-16 w-16 rounded-full shadow border-2 border-accent"
        />
        <p className="hidden desktop:block">Anastasiia Drachuk</p>
      </div>
      <nav>
        <ul className=" hidden tablet:flex gap-8 justify-center items-center ">
          <li className={clsx(pathname == "/" ? activeLink : defaultLink)}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={clsx(pathname == "/projects" ? activeLink : defaultLink)}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={clsx(pathname == "/reviews" ? activeLink : defaultLink)}
          >
            <Link href="/reviews">Reviews</Link>
          </li>
          <li
            className={clsx(pathname == "/contacts" ? activeLink : defaultLink)}
          >
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <button className="tablet:hidden">
        <Icon name="menu" className="stroke-orange-600 fill-none" />
      </button>
    </div>
  );
};

export default Header;
