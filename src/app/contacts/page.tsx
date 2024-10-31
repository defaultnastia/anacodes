import React from "react";
import ToDoList from "../components/ToDoList.jsx";

const ContactsPage = () => {
  return (
    <div className="px-32 py-12">
      <h2 className="text-center font-medium text-2xl uppercase mb-4">
        Contacts Page
      </h2>
      <ToDoList></ToDoList>
    </div>
  );
};

export default ContactsPage;
