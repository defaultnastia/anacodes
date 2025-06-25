"use client";

import React from "react";
import SkillCard from "./SkillCard";
import skills from "src/data/stack.json";
import { Fraunces } from "next/font/google";
import clsx from "clsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const marker = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1279, min: 800 },
    items: 7,
  },
  smallTablet: {
    breakpoint: { max: 799, min: 620 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 619, min: 420 },
    items: 4,
  },
  smallMobile: {
    breakpoint: { max: 419, min: 0 },
    items: 3,
  },
};

const Skills = () => {
  return (
    <div className="py-8 tablet:py-12 bg-gradient-accent">
      <h2
        className={clsx(
          marker.className,
          "text-center text-xl text-background desktop:text-2xl uppercase font-semibold"
        )}
      >
        Technologies
      </h2>
      <Carousel
        responsive={responsive}
        ssr={true}
        autoPlay
        infinite={true}
        arrows={false}
        className="h-40"
      >
        {skills.map((skill, i) => {
          return <SkillCard key={i} skill={skill} />;
        })}
      </Carousel>
    </div>
  );
};

export default Skills;
