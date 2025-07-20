import React, { type FC } from "react";

import WebDemo from "./WebDemo";
import MobileDemo from "./MobileDemo";
import { DemoContainerStyled } from "./styles";

type Props = {
  projectId: string;
};

const DemoSection: FC<Props> = ({ projectId }) => {
  return (
    <DemoContainerStyled>
      <WebDemo projectId={projectId} />
      <MobileDemo projectId={projectId} />
    </DemoContainerStyled>
  );
};

export default DemoSection;
