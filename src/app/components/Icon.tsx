import React from "react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon = ({ name, size = 40, className = "" }: IconProps) => {
  return (
    <div>
      <svg width={size} height={size} className={className}>
        <use xlinkHref={`/images/icons.svg#icon-${name}`} />
      </svg>
    </div>
  );
};

export default Icon;
