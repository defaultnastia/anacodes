import React from "react";
import ToDoList from "../components/ToDoList";
import Socials from "../components/contacts/Socials";

const ContactsPage = () => {
  return (
    <div className="px-8 tablet:px-10 desktop:px-32 py-12">
      <h2 className="text-center font-medium text-2xl uppercase mb-4">
        Contacts Page
      </h2>
      <Socials className="w-fit m-auto" />
      <ToDoList></ToDoList>
    </div>
  );
};

export default ContactsPage;
