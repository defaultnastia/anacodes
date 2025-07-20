"use client";
import React, { type FC } from "react";

import ProjectsList from "../components/projects/ProjectsList";
import data from "../../data/projects.json";
import { DottedBackgroundStyled } from "../styles/styles";

const ProjectsPage: FC = () => {
  return (
    <DottedBackgroundStyled>
      <ProjectsList projects={data} />
    </DottedBackgroundStyled>
  );
};

export default ProjectsPage;
