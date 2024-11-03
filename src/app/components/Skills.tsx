import React from "react";
import SkillCard from "./SkillCard";
import skills from "src/data/stack.json";

const Skills = () => {
  return (
    <div className="px-8 tablet:px-10 desktop:px-32 min-h-128 py-12 flex flex-col gap-10 justify-center bg-gradient-to-r from-stone-100 from-10% via-stone-450 via-65% to-orange-250 to-100%">
      <h2 className="text-center font-medium text-2xl desktop:text-3xl uppercase mb-8">
        Skills
      </h2>
      <div className="min-h-44 carousel relative rounded-lg  items-center">
        <div className="carousel-item h-20 tablet:h-32 w-1"></div>
        {skills.map((skill, i) => {
          return <SkillCard key={i} skill={skill} />;
        })}
        <div className="carousel-item h-20 tablet:h-32 w-1"></div>
      </div>
      <div className="App"></div>
    </div>
  );
};

export default Skills;
