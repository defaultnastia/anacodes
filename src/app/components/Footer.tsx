import React from "react";
import Icon from "./Icon";

const iconAppearance =
  "drop-shadow-sm fill-stone-500 hover:fill-accent hover:cursor-pointer";

const Footer = () => {
  return (
    <div className="w-full px-32 py-10 flex justify-between">
      <div className="max-w-2xl">
        <h3 className="font-medium text-xl uppercase mb-4">
          Anastasiia Drachuk
        </h3>
        <p className="text-stone-500">
          An aspiring full-stack developer, good in JavaScript and TypeScript,
          interested in modern front-end frameworks, and comfortable with
          Node.js and the fundamentals of API.
        </p>
      </div>
      <div className="max-w-2xl text-end flex flex-col">
        <h3 className="font-medium text-xl uppercase mb-4">Social</h3>
        <ul className="flex items-center justify-end gap-5 flex-grow">
          <li>
            <a
              href="https://www.linkedin.com/in/anastasiia-drachuk/"
              target="_blank"
            >
              <Icon name="linkedin" size={50} className={iconAppearance} />
            </a>
          </li>
          <li>
            <a href="https://github.com/defaultnastia" target="_blank">
              <Icon name="Github" size={50} className={iconAppearance} />
            </a>
          </li>
          <li>
            <a href="mailto:anastayaaa@gmail.com">
              <Icon name="gmail" size={50} className={iconAppearance} />
            </a>
          </li>
          <li>
            <a href="tel:+34672509702">
              <Icon name="phone" size={50} className={iconAppearance} />
            </a>
          </li>
          <li>
            <a href="https://t.me/nastiabydefault" target="_blank">
              <Icon name="telegram" size={50} className={iconAppearance} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/34672509702" target="_blank">
              <Icon name="whatsapp" size={50} className={iconAppearance} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
