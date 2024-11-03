import React from "react";
import Icon from "./Icon";

const iconAppearance =
  "drop-shadow-sm fill-stone-500 hover:fill-accent hover:cursor-pointer";

const Footer = () => {
  return (
    <div className="px-8 tablet:px-10 desktop:px-32 w-full py-10 flex flex-col tablet:flex-row items-center tablet:justify-between">
      <div className="tablet:max-w-80 desktop:max-w-100 text-center tablet:text-left">
        <h3 className="font-medium text-l uppercase mb-4">
          Anastasiia Drachuk
        </h3>
        <p className="text-stone-500 text-sm">
          An aspiring full-stack developer, good in JavaScript and TypeScript,
          interested in modern front-end frameworks, and comfortable with
          Node.js and the fundamentals of API.
        </p>
      </div>
      <div className="max-w-2xl text-end flex flex-col">
        <h3 className="hidden tablet:block font-medium text-xl uppercase mb-4">
          Social
        </h3>
        <ul className="flex items-center justify-center tablet:justify-end gap-2 desktop:gap-5 flex-grow pt-5">
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
      </div>
    </div>
  );
};

export default Footer;
