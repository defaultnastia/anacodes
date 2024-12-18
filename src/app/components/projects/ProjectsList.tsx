import { ProjectType } from "@/app/types";
import React from "react";
import Project from "./Project";

type Props = {
  projects: ProjectType[];
};

const ProjectsList = ({ projects }: Props) => {
  return (
    <ul className="flex flex-col gap-8 py-8">
      {projects.map((project) => (
        <li key={project.id}>
          <Project project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
