import React, { type FC } from "react";
import { Typography } from "@mui/material";

import DemoSection from "./DemoSection";
import DemoLinksSection from "./LinksSection";
import {
  ProjectDescriptionStyled,
  ProjectHeaderStyled,
  ProjectSectionStyled,
} from "./styles";

import { type ProjectType } from "@/app/types";

// == == == == !! TODO add search by stack options (via hashtag) !! == == == ==

type Props = {
  project: ProjectType;
};

const Project: FC<Props> = ({ project }) => {
  return (
    <ProjectSectionStyled>
      <DemoSection projectId={project.id} />

      <ProjectDescriptionStyled>
        <ProjectHeaderStyled>{project.title}</ProjectHeaderStyled>
        <Typography>{project.summary}</Typography>

        <DemoLinksSection links={project.links} />
      </ProjectDescriptionStyled>
    </ProjectSectionStyled>
  );
};

export default Project;
