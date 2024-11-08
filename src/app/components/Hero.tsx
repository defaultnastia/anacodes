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
  "bg-gradient-to-r from-[#FFB147] from-52% via-[#FF6C63] via-65% to-[#B86ADF] to-100% bg-clip-text text-transparent font-bold";

const Hero = () => {
  return (
    <>
      <div className={css.running}>
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
              "font-medium text-xl desktop:text-2xl uppercase max-w-80 tablet:max-w-xl"
            )}
          >
            Hey, I’m Anastasiia Drachuk, but you can call me Ana
          </p>
          <p
            className={clsx(
              css.running__line,
              marker.className,
              "font-medium text-xl desktop:text-2xl uppercase max-w-80 tablet:max-w-xl"
            )}
          >
            Hey, I’m Anastasiia Drachuk, but you can call me Ana
          </p>
        </div>
      </div>
      <div className="px-8 py-16 tablet:px-10 desktop:px-32 flex items-center text-center">
        <p className="w-1/3">
          As a{" "}
          <span className={clsx(marker.className, accentClass)}>developer</span>
          , I strive to create dynamic, responsive and visually appealing web
          applications.
        </p>
        <Image
          src="/images/avatar.png"
          width={180}
          height={180}
          alt="Anastasiia's photo"
          className="rounded-xl shadow-image m-auto"
        />
        <p className="w-1/3">
          As a{" "}
          <span className={clsx(marker.className, accentClass)}>former QA</span>
          , I strive to do it well.
        </p>
      </div>
    </>
  );
};

export default Hero;
