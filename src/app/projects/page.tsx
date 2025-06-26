import React from "react";
import ProjectsList from "../components/projects/ProjectsList";

import data from "../../data/projects.json";

const ProjectsPage = () => {
  return (
    <div className="px-8 tablet:px-10 desktop:px-32 py-12">
      <p className="text-center text-fadedAccent">
        ⚠️ This page is currently a work in progress. Only the desktop version
        is available, and the &lsquo;Details&rsquo; button is not yet
        functional. Thank you for your understanding! ⚠️
      </p>
      <ProjectsList projects={data} />
    </div>
  );
};

export default ProjectsPage;
