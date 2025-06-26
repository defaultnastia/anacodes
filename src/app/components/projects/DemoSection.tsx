import React, { type FC } from "react";

import WebDemo from "./WebDemo";
import MobileDemo from "./MobileDemo";

type Props = {
  projectId: string;
};

const DemoSection: FC<Props> = ({ projectId }) => {
  return (
    <div className="relative w-[520px] h-[340px]">
      <WebDemo projectId={projectId} />
      <MobileDemo projectId={projectId} />
    </div>
  );
};

export default DemoSection;
