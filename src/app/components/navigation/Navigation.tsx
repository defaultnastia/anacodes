import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface NavigationProps {
  pathname: string;
}

const defaultLink =
  "flex items-center py-2 border-b-2 border-transparent px-4 mx-0 hover:border-accent hover:px-0 hover:mx-4 ";
const activeLink =
  "flex items-center py-2 border-2 border-accent rounded-xl px-4 mx-0 text-accent font-bold";

const Navigation = ({ pathname }: NavigationProps) => {
  return (
    <nav className="w-full">
      <ul className=" hidden tablet:flex gap-8 justify-center items-center">
        <li className={clsx(pathname == "/" ? activeLink : defaultLink)}>
          <Link href="/">Home</Link>
        </li>
        <li
          className={clsx(pathname == "/projects" ? activeLink : defaultLink)}
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li
          className={clsx(
            pathname == "/recommendations" ? activeLink : defaultLink
          )}
        >
          <Link href="/recommendations">Recommendations</Link>
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
