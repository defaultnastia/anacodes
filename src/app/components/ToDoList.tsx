import Image from "next/image";
import React, { type FC } from "react";

const ToDoList: FC = () => {
  return (
    <div>
      <p className="text-center text-fadedAccent">
        ⚠️ This page is currently a work in progress, but you can find all
        important links above. Thank you for your interest! ⚠️
      </p>
      <Image
        src="/images/catstruction.jpeg"
        width={200}
        height={200}
        alt="Cat in a helmet"
        className="mx-auto my-8"
      />
    </div>
  );
};

export default ToDoList;
