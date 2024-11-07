import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface NavigationProps {
  pathname: string;
}

const defaultLink =
  "border-b-2 border-transparent px-0 mx-2 hover:border-brightAccent hover:px-2 hover:mx-0 ";
const activeLink = "text-brightAccent border-b-2 border-transparent px-0 mx-2";

const Navigation = ({ pathname }: NavigationProps) => {
  return (
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
        <li className={clsx(pathname == "/reviews" ? activeLink : defaultLink)}>
          <Link href="/reviews">Reviews</Link>
        </li>
        <li
          className={clsx(pathname == "/contacts" ? activeLink : defaultLink)}
        >
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
