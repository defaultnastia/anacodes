import React from "react";
import ToDoList from "../components/ToDoList";

const ProjectsPage = () => {
  return (
    <div className="px-32 py-12">
      <h2 className="text-center font-medium text-2xl uppercase mb-4">
        Projects Page
      </h2>
      <ToDoList></ToDoList>
    </div>
  );
};

export default ProjectsPage;
