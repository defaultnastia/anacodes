import React, { type FC } from "react";
import { List } from "@mui/material";

import Project from "./Project";
import { ProjectsListStyled } from "./styles";

import { type ProjectType } from "@/app/types";

type Props = {
  projects: ProjectType[];
};

const ProjectsList: FC<Props> = ({ projects }) => {
  return (
    <ProjectsListStyled>
      {projects.map((project) => (
        <List key={project.id}>
          <Project project={project} />
        </List>
      ))}
    </ProjectsListStyled>
  );
};

export default ProjectsList;
