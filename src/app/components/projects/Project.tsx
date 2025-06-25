import { ProjectLinkType, ProjectType } from "@/app/types";
import React from "react";
import clsx from "clsx";
import { Fraunces } from "next/font/google";
import DemoSection from "./DemoSection";
import LinksSection from "./LinksSection";

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
  "w-fit text-gradient-accent font-bold uppercase text-2xl"
);

const Project = ({ project }: Props) => {
  return (
    <div className="flex justify-between">
      <DemoSection projectId={project.id} />

      <div className="flex flex-col w-1/2 gap-2">
        <p className={accentClass}>{project.title}</p>
        <p>{project.summary}</p>

        <LinksSection links={project.links} className="pt-10" />
      </div>
    </div>
  );
};

export default Project;
