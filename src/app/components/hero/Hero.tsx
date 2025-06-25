import clsx from "clsx";
import { Fraunces } from "next/font/google";
import React from "react";
import css from "./Hero.module.css";
import Image from "next/image";

const marker = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Hero = () => (
  <>
    <div className="p-8 tablet:py-16 tablet:px-10 desktop:px-32">
      <div className="rounded-xl shadow-theme flex flex-col tablet:flex-row items-center overflow-hidden max-w-lg tablet:max-w-none m-auto desktop:max-h-[360px]">
        <div className="text-center tablet:text-left p-4 desktop:px-10 flex flex-col justify-center gap-4">
          <h1
            className={clsx(
              marker.className,
              "text-3xl desktop:text-4xl text-gradient-accent font-bold"
            )}
          >
            Hey there, <br className="tablet:hidden desktop:inline" /> I'm Ana.
          </h1>
          <p className="leading-relaxed">
            I'm a web developer with solid background in QA and a passion for
            building modern, creative, and efficient applications. I love
            working with JavaScript, React, and TypeScript, and enjoy
            collaborating on projects that challenge me to grow.
          </p>
        </div>
        <Image
          src="/images/avatar.jpeg"
          width={512}
          height={180}
          alt="Portrait of Anastasiia Drachuk, web developer"
          className="h-96 tablet:w-52 tablet:h-52 tablet:rounded-full desktop:w-96 desktop:h-full desktop:rounded-none object-cover tablet:m-4 desktop:m-0"
          role="img"
        />
      </div>
    </div>
    <div className={clsx(css.running, "hidden tablet:block")}>
      <div className={clsx(css.running__inner, "bg-gradient-accent")}>
        {[...Array(2)].map((_, i) => (
          <p
            key={i}
            className={clsx(css.running__line, marker.className, "...")}
          >
            As a developer, I create web applications. As a former QA, I strive
            to do it well.
          </p>
        ))}
      </div>
    </div>
  </>
);

export default Hero;
