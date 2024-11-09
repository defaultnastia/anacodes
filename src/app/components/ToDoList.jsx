import Image from "next/image";
import React from "react";

const ToDoList = () => {
  return (
    <div>
      <p className="text-center text-stone-500">
        Sorry, come back later! Page is under construction!
      </p>
      <Image
        src="/images/catstruction.jpeg"
        width={200}
        height={200}
        alt="Cat in a helmet"
        className="mx-auto my-8"
      />

      <div className="border rounded p-8">
        <h3 className="text-center font-medium text-xl uppercase mb-4">
          These are the plans for this app
        </h3>
        <ul>
          <li>
            <h4 className="font-semibold">Common:</h4>
            <p>
              Add tablet and mobile versions, add common container classes, add
              Ukrainian and Spanish localization, add themes, create back-end.
            </p>
          </li>
          <li>
            <h4 className="font-semibold">Home Page:</h4>
            <p>
              Add links to the projects and design to the About section text,
              add new profile picture to the Header and About sections, fetch
              skills list from the back-end with titles and links.
            </p>
          </li>
          <li>
            <h4 className="font-semibold">Projects Page:</h4>
            <p>
              Fetch projects from back-end, add page with details for each
              project.
            </p>
          </li>
          <li>
            <h4 className="font-semibold">Recommendations Page:</h4>
            <p>
              Fetch projects from back-end, on BE copy recommendations from the
              LI, check for the integration, Add ability to leave a review with
              Google auth.
            </p>
          </li>
          <li>
            <h4 className="font-semibold">Contacts Page:</h4>
            <p>
              Add page content: contacts, downloadable CV file, summary on soft
              and hard skills, chat/contact-form.
            </p>
          </li>
          <li>
            <h4 className="font-semibold">Figma:</h4>
            <p>
              Add tablet and mobile versions, update some grouped elements to
              layouts
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
