import clsx from "clsx";
import { Fraunces } from "next/font/google";
import React from "react";

const marker = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const accentClass = clsx(
  marker.className,
  "bg-gradient-to-r from-[#FFB147] from-52% via-[#FF6C63] via-65% to-[#B86ADF] to-100% bg-clip-text text-transparent font-bold"
);

const cardClass =
  "flex justify-center items-center w-140 px-4 py-8 rounded-xl  shadow-lg";

const About = () => {
  return (
    <div className="px-8 tablet:px-10 desktop:px-32 py-12">
      <ul className="flex flex-wrap justify-between gap-y-10">
        <li className={clsx(cardClass, "border-[#f8b6598f]")}>
          <p>
            I spent several years in QA, working on both manual and automated
            testing and even leading teams. I’ve been lucky to work for big
            names like <span className={accentClass}>Zeiss</span> and{" "}
            <span className={accentClass}>Rakuten</span>, plus some exciting
            fintech and cybersecurity startups. Twice, I made the top-performers
            list, which was based on the team’s, manager’s and customer reviews.
          </p>
        </li>
        <li className={clsx(cardClass, "border-[#ff6b6385]")}>
          <p>
            Eventually, I got curious about development, so I learned JavaScript
            and HTML/CSS. I loved it and kept going with React, Redux,
            TypeScript, Tailwind, and Node.js — and now, I’m diving into
            Next.js. I’ve also got plans to learn Docker and Flutter soon to
            broaden my <span className={accentClass}>hard skills</span>.
          </p>
        </li>
        <li className="w-full flex items-center justify-center"></li>
        <li className={clsx(cardClass, "border-[#b86adf6e]")}>
          <p>
            My QA experience really built up my{" "}
            <span className={accentClass}>teamwork skills</span> —
            responsibility, creativity, and communication, especially when it
            comes to sharing knowledge or presenting demo to teammates and
            clients. I also have a strong understanding of Scrum and other
            methodologies that help keep projects running smoothly.
          </p>
        </li>
        <li className={clsx(cardClass, "border-[#f8b6598f]")}>
          <p>
            So far, I’ve led and contributed to group{" "}
            <span className={accentClass}>projects</span> as a developer and
            team-lead, and simple personal projects to showcase my skills. This
            portfolio app I designed in Figma and developed using Next.js +
            Tailwind. In the nearest future I plan to add backend on TypeScript
            + Express + MongoDB, it will allow to add recommendations.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default About;
