import React, { type FC } from "react";

import Icon from "../Icon";

interface Props {
  skill: string;
}

const SkillCard: FC<Props> = ({ skill }) => {
  return (
    <div className="h-28 w-28 rounded-lg hover:relative hover:scale-125 carousel-item mr-10 last-of-type:mr-0 flex flex-col items-center justify-center gap-2 shadow bg-slate-800/10">
      <Icon name={skill} size={40} />
      <p className="text-sm text-background">{skill}</p>
    </div>
  );
};

export default SkillCard;
