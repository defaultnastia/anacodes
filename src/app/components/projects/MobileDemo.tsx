import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = {
  projectId: string;
  className?: string;
};

const MobileDemo = ({ projectId, className }: Props) => {
  return (
    <div className={clsx(className, "absolute top-8 right-4")}>
      <Image
        src={`/images/projects/mobile-${projectId}.png`}
        width={160}
        height={200}
        alt="project demo image"
        className="absolute top-3 right-2 object-cover h-[296px] w-[140px] rounded-2xl"
      />
      <Image
        src="/images/iphone.webp"
        width={160}
        height={200}
        alt="smartphone with project demo"
        className="relative top-0 left-0"
      />
    </div>
  );
};

export default MobileDemo;
