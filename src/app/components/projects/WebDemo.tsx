import React, { type FC } from "react";

import {
  WebDemoContainerStyled,
  WebDemoFrameStyled,
  WebDemoImgStyled,
} from "./styles";

type Props = {
  projectId: string;
};

const WebDemo: FC<Props> = ({ projectId }) => {
  return (
    <WebDemoContainerStyled>
      <WebDemoImgStyled
        src={`/images/projects/web-${projectId}.png`}
        width={228}
        height={390}
        alt="project demo image"
      />
      <WebDemoFrameStyled
        src="/images/macbook.webp"
        width={500}
        height={280}
        alt=""
        aria-hidden="true"
        role="presentation"
      />
    </WebDemoContainerStyled>
  );
};

export default WebDemo;
