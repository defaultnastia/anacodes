import React from "react";
import Icon from "./Icon";

interface SkillCardProps {
  skill: string;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="h-32 w-32 bg-stone-150 rounded-lg hover:relative hover:scale-125 carousel-item mr-10 last-of-type:mr-0  flex flex-col items-center justify-center gap-2 shadow">
      <Icon name={skill} size={52} />
      <p className="text-sm text-stone-600">{skill}</p>
    </div>
  );
};

export default SkillCard;
