import React, { type FC } from "react";

interface Props {
  name: string;
  className?: string;
  size?: number;
}

const Icon: FC<Props> = ({ name, size = 40, className = "" }) => {
  return (
    <div>
      <svg width={size} height={size} className={className}>
        <use xlinkHref={`/images/icons.svg#icon-${name}`} />
      </svg>
    </div>
  );
};

export default Icon;
