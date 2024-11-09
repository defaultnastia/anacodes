import clsx from "clsx";
import { Fraunces } from "next/font/google";
import React from "react";
import css from "./Hero.module.css";
import Image from "next/image";

const marker = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const accentClass =
  "bg-gradient-to-r from-[#FFB147] from-15% via-[#FF6C63] via-25% to-[#B86ADF] to-100% bg-clip-text text-transparent font-bold";

const Hero = () => {
  return (
    <>
      <div className="p-8 tablet:py-16 tablet:px-10 desktop:px-32">
        <div className="rounded-xl shadow-lg flex flex-col tablet:flex-row items-center overflow-hidden max-w-lg tablet:max-w-none m-auto">
          <div className="text-center tablet:text-left p-4 desktop:px-10 flex flex-col justify-center gap-4">
            <h1
              className={clsx(
                marker.className,
                accentClass,
                "text-3xl desktop:text-4xl"
              )}
            >
              Hey there, <br className="tablet:hidden desktop:inline" /> I'm
              Ana.
            </h1>
            <p>
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
            alt="Anastasiia's photo"
            className="tablet:w-52 tablet:h-52 tablet:rounded-full desktop:w-1/2 desktop:h-full desktop:rounded-none object-cover tablet:m-4 desktop:m-0"
          />
        </div>
      </div>
      <div className={clsx(css.running, "hidden tablet:block")}>
        <div
          className={clsx(
            css.running__inner,
            "bg-gradient-to-r from-[#FFB147] from-52% via-[#FF6C63] via-65% to-[#B86ADF] to-100%"
          )}
        >
          <p
            className={clsx(
              css.running__line,
              marker.className,
              "font-medium text-xl desktop:text-2xl max-w-80 tablet:max-w-xl"
            )}
          >
            As a developer, I create web applications. As a former QA, I strive
            to do it well.
          </p>
          <p
            className={clsx(
              css.running__line,
              marker.className,
              "font-medium text-xl desktop:text-2xl max-w-80 tablet:max-w-xl"
            )}
          >
            As a developer, I create web applications. As a former QA, I strive
            to do it well.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
