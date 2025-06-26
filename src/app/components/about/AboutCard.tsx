import clsx from "clsx";
import React, { type FC, type ReactNode } from "react";

const iconClass = "text-5xl tablet:text-6xl absolute -top-8 tablet:-top-10";
const cardClass =
  "flex flex-col relative justify-center items-center max-w-lg tablet:max-w-none desktop:w-calc px-4 py-8 rounded-xl shadow-theme";
const paragraphClass =
  "mobile:text-lg tablet:text-lg tablet:text-left leading-relaxed text-center text-base ";

interface Props {
  icon: string;
  text: ReactNode;
  topic: string;
}

const AboutCard: FC<Props> = ({ icon, text, topic }) => (
  <li className={clsx(cardClass)} id={topic} key={topic}>
    <p className={iconClass}>
      <span role="img">{icon}</span>
    </p>
    <p className={paragraphClass}>{text}</p>
  </li>
);

export default AboutCard;
