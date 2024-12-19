import React from "react";
import ProjectsList from "../components/projects/ProjectsList";

import data from "../../data/projects.json";

const ProjectsPage = () => {
  return (
    <div className="px-8 tablet:px-10 desktop:px-32 py-12">
      <p className="text-center text-red-400">
        ⚠️ Current page is in progress, only desktop version is available,
        "Details" button onClick not yet implemented ⚠️
      </p>
      <ProjectsList projects={data} />
    </div>
  );
};

export default ProjectsPage;
