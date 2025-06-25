import React from "react";
import ToDoList from "../components/ToDoList";
import Socials from "../components/contacts/Socials";

const ContactsPage = () => {
  return (
    <div className="px-8 tablet:px-10 desktop:px-32 py-12">
      <div className="w-fit m-auto border-2 pt-0 tablet:pt-6 px-4 tablet:px-12 rounded-lg border-accent flex justify-center mb-8">
        <Socials />
      </div>
      <ToDoList />
    </div>
  );
};

export default ContactsPage;
