import clsx from "clsx";
import Link from "next/link";
import React, { type FC } from "react";

interface Props {
  pathname: string;
  close: () => void;
}

const activeLink = 'before:content-["⸺"] after:content-["⸺"]';

const NavigationMobile: FC<Props> = ({ pathname, close }) => {
  return (
    <nav className="h-full flex justify-center items-center">
      <ul className=" flex flex-col gap-4 justify-center items-center text-background">
        <li className={clsx(pathname == "/" && activeLink)}>
          <Link
            href="/"
            className="px-2"
            onClick={() => {
              close();
            }}
          >
            Home
          </Link>
        </li>
        <li className={clsx(pathname == "/projects" && activeLink)}>
          <Link
            href="/projects"
            className="px-2"
            onClick={() => {
              close();
            }}
          >
            Projects
          </Link>
        </li>
        <li className={clsx(pathname == "/contacts" && activeLink)}>
          <Link
            href="/contacts"
            className="px-2"
            onClick={() => {
              close();
            }}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMobile;
