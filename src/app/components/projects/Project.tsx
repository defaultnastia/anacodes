import { ProjectType } from "@/app/types";
import React from "react";
import WebDemo from "./WebDemo";
import MobileDemo from "./MobileDemo";
import Link from "next/link";
import clsx from "clsx";
import { Fraunces } from "next/font/google";

//TODO add search by stack options (via hashtag)

type Props = {
  project: ProjectType;
};

const marker = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const accentClass = clsx(
  marker.className,
  "w-fit bg-gradient-to-r from-[#FFB147] from-52% via-[#FF6C63] via-65% to-[#B86ADF] to-100% bg-clip-text text-transparent font-bold",
  "uppercase"
);

const linkClass =
  "pr-4 border-r-2 border-accent last-of-type:border-none font-bold";

const Project = ({ project }: Props) => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <WebDemo image={project.image} />
        <MobileDemo image={project.image} />
      </div>

      <div className="flex flex-col w-1/2 gap-2">
        <p className={accentClass}>{project.title}</p>
        <p>{project.summary}</p>

        <ul className="flex gap-4">
          <li className={linkClass}>
            <Link href="">Details</Link>
          </li>
          {project.links.map((link) => (
            <li key={link.link} className={linkClass}>
              <a href={link.link}>{link.name} ↗</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
