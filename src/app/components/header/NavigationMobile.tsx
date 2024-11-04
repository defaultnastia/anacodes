import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface NavigationProps {
  pathname: string;
  close: () => void;
}

const activeLink = 'before:content-["⸺"] after:content-["⸺"]';

const NavigationMobile = ({ pathname, close }: NavigationProps) => {
  return (
    <nav className="h-full flex justify-center items-center">
      <ul className=" flex flex-col gap-1 justify-center items-center text-background">
        <li className={clsx(pathname == "/" && activeLink)}>
          <Link
            href="/"
            onClick={() => {
              close();
            }}
          >
            Home
          </Link>
        </li>
        <li
          className={clsx(pathname == "/projects" && activeLink)}
          onClick={() => {
            close();
          }}
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li
          className={clsx(pathname == "/reviews" && activeLink)}
          onClick={() => {
            close();
          }}
        >
          <Link href="/reviews">Reviews</Link>
        </li>
        <li
          className={clsx(pathname == "/contacts" && activeLink)}
          onClick={() => {
            close();
          }}
        >
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMobile;
