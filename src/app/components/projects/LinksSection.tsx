import clsx from "clsx";
import Link from "next/link";
import React, { type FC } from "react";

type Props = {
  links: { name: string; link: string }[];
  className?: string;
};

const linkClass =
  "pr-4 border-r-2 border-accent last-of-type:border-none font-bold";

const LinksSection: FC<Props> = ({ links, className }) => {
  return (
    <ul className={clsx("flex gap-4 min-w-fit", className)}>
      <li className={linkClass}>
        <Link href="">Details</Link>
      </li>
      {links.map((link) => (
        <li key={link.link} className={linkClass}>
          <a
            href={link.link}
            className="text-nowrap"
            target="_blank"
            rel="noreferrer"
          >
            {link.name} ↗
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksSection;
