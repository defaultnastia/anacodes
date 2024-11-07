import clsx from "clsx";
import { Abril_Fatface, Permanent_Marker } from "next/font/google";
import React from "react";
import css from "./Hero.module.css";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

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
              "font-medium text-2xl desktop:text-3xl uppercase max-w-80 tablet:max-w-xl"
            )}
          >
            Hey, I’m Anastasiia Drachuk, but you can call me{" "}
            <span
              className={clsx(
                marker.className,
                "text-4xl text-foreground italic"
              )}
            >
              Ana
            </span>
          </p>
          <p
            className={clsx(
              css.running__line,
              "font-medium text-2xl desktop:text-3xl uppercase max-w-80 tablet:max-w-xl"
            )}
          >
            Hey, I’m Anastasiia Drachuk, but you can call me{" "}
            <span
              className={clsx(
                marker.className,
                "text-4xl text-foreground italic"
              )}
            >
              Ana
            </span>
          </p>
        </div>
      </div>
      <div className="text-center text-foreground px-8 tablet:px-10 desktop:px-32 min-h-60 flex flex-col items-center justify-center gap-10 ">
        <p>
          As a{" "}
          <span
            className={clsx(
              marker.className,
              "text-3xl text-foreground italic"
            )}
          >
            developer
          </span>
          , I strive to create dynamic, responsive and visually appealing web
          applications.
        </p>
        <p>
          As a{" "}
          <span
            className={clsx(
              marker.className,
              "text-3xl text-foreground italic"
            )}
          >
            former QA
          </span>
          , I strive to do it well.
        </p>
      </div>
    </>
  );
};

export default Hero;
