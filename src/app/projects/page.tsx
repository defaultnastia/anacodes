import React from "react";
import ProjectsList from "../components/projects/ProjectsList";

import data from "../../data/projects.json";

const ProjectsPage = () => {
  return (
    <div className="px-8 tablet:px-10 desktop:px-32 py-12">
      <ProjectsList projects={data} />
    </div>
  );
};

export default ProjectsPage;
