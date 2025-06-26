import clsx from "clsx";
import Image from "next/image";
import React, { type FC } from "react";

type Props = {
  projectId: string;
  className?: string;
};
const WebDemo: FC<Props> = ({ projectId, className }) => {
  return (
    <div className={clsx(className, "relative w-[500px]")}>
      <Image
        src={`/images/projects/web-${projectId}.png`}
        width={400}
        height={280}
        alt="project demo image"
        className="relative top-5 left-14 object-cover h-[228px] w-[390px]"
      />
      <Image
        src="/images/macbook.webp"
        width={500}
        height={280}
        alt="laptop with project demo"
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default WebDemo;
