import clsx from "clsx";
import { Fraunces } from "next/font/google";
import React, { type FC } from "react";

import AboutCard from "./AboutCard";

import { getAboutText } from "@/data/getAboutText";

const marker = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const accentClass = clsx(marker.className, "text-gradient-accent font-bold");
const aboutText = getAboutText(accentClass);

const About: FC = () => (
  <div className="p-8 tablet:px-10 desktop:px-32 tablet:py-12 flex flex-col gap-12">
    <h2
      className={clsx(
        marker.className,
        "text-center text-xl desktop:text-2xl uppercase font-semibold",
      )}
    >
      Get to know me
    </h2>
    <ul className="w-full flex flex-wrap flex-col desktop:flex-row items-center justify-center gap-12">
      {aboutText.map(({ icon, text, topic }) =>
        AboutCard({ icon, text, topic }),
      )}
    </ul>
  </div>
);

export default About;
