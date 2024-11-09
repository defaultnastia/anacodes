import React from "react";
import Icon from "../Icon";
import clsx from "clsx";

const iconAppearance =
  "drop-shadow-sm fill-stone-500 hover:fill-accent hover:cursor-pointer";

interface SocialsProps {
  className?: string;
}

const Socials = ({ className }: SocialsProps) => {
  return (
    <ul
      className={clsx(
        "flex items-center justify-center tablet:justify-end gap-2 desktop:gap-5 flex-grow py-5 tablet:pt-0",
        className
      )}
    >
      <li>
        <a
          href="https://www.linkedin.com/in/anastasiia-drachuk/"
          target="_blank"
        >
          <Icon name="linkedin" size={40} className={iconAppearance} />
        </a>
      </li>
      <li>
        <a href="https://github.com/defaultnastia" target="_blank">
          <Icon name="Github" size={40} className={iconAppearance} />
        </a>
      </li>
      <li>
        <a href="mailto:anastayaaa@gmail.com">
          <Icon name="gmail" size={40} className={iconAppearance} />
        </a>
      </li>
      <li>
        <a href="tel:+34672509702">
          <Icon name="phone" size={40} className={iconAppearance} />
        </a>
      </li>
      <li>
        <a href="https://t.me/nastiabydefault" target="_blank">
          <Icon name="telegram" size={40} className={iconAppearance} />
        </a>
      </li>
      <li>
        <a href="https://wa.me/34672509702" target="_blank">
          <Icon name="whatsapp" size={40} className={iconAppearance} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
