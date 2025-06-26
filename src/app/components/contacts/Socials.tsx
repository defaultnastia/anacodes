import React, { type FC } from "react";
import clsx from "clsx";

import Icon from "../Icon";
import data from "../../../data/socials.json";

const iconAppearance =
  "drop-shadow-sm fill-stone-500 hover:fill-accent hover:cursor-pointer";

interface Props {
  className?: string;
}

const Socials: FC<Props> = ({ className }) => {
  return (
    <ul
      className={clsx(
        "flex items-center justify-center tablet:justify-end gap-2 desktop:gap-5 flex-grow py-5 tablet:pt-0",
        className,
      )}
    >
      {data.map(({ href, icon, label }) => (
        <li key={icon}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon name={icon} size={40} className={iconAppearance} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
