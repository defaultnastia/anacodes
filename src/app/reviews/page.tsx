import React from "react";
import ToDoList from "../components/ToDoList";

const ReviewsPage = () => {
  return (
    <div className="px-8 tablet:px-10 desktop:px-32 py-12">
      <h2 className="text-center font-medium text-2xl uppercase mb-4">
        Reviews Page
      </h2>
      <ToDoList></ToDoList>
    </div>
  );
};

export default ReviewsPage;
