import React from "react";
import Icon from "../Icon";
import { Fraunces } from "next/font/google";
import clsx from "clsx";
import Socials from "../contacts/Socials";

const marker = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Footer = () => {
  return (
    <div className="p-8 tablet:px-10 desktop:px-32 w-full tablet:py-10 flex flex-col tablet:flex-row items-center tablet:justify-between">
      <div className="tablet:max-w-80 desktop:max-w-100 text-center tablet:text-left">
        <h3
          className={clsx(
            marker.className,
            "font-medium text-l uppercase mb-4"
          )}
        >
          Anastasiia Drachuk
        </h3>
        <p className="text-stone-500 text-sm">
          An aspiring full-stack developer, good in JavaScript and TypeScript,
          interested in modern front-end frameworks, and comfortable with
          Node.js and the fundamentals of API.
        </p>
      </div>
      <div className="max-w-2xl text-end flex flex-col">
        <h3
          className={clsx(
            marker.className,
            "hidden tablet:block font-medium text-xl uppercase mb-4"
          )}
        >
          Social
        </h3>
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
