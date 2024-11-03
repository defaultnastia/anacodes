import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="px-8 tablet:px-10 desktop:px-32 min-h-128 bg-hero bg-center bg-cover flex flex-col items-center justify-center gap-10 text-center">
      <Image
        src="/images/avatar.png"
        width={96}
        height={96}
        alt="Avatar"
        className="hidden tablet:block desktop:hidden h-24 w-24 rounded-full shadow border border-accent"
      />
      <h1 className=" font-medium text-2xl desktop:text-3xl uppercase max-w-80 tablet:max-w-xl">
        Hey, I’m Anastasiia Drachuk, but you can call me{" "}
        <span className="text-orange-600">Ana</span>
      </h1>
      <p>
        As a <span className="text-orange-600">developer</span>, I strive to
        create dynamic, responsive and visually appealing web applications.
      </p>
      <p>
        As a <span className="text-orange-600">former QA</span>, I strive to do
        it well.
      </p>
    </div>
  );
};

export default Hero;
