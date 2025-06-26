import React, { type FC } from "react";

import Project from "./Project";

import { type ProjectType } from "@/app/types";

type Props = {
  projects: ProjectType[];
};

const ProjectsList: FC<Props> = ({ projects }) => {
  return (
    <ul className="flex flex-col gap-32 py-8">
      {projects.map((project) => (
        <li key={project.id}>
          <Project project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
