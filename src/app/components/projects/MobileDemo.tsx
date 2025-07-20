import React, { type FC } from "react";

import {
  MobileDemoContainerStyled,
  MobileDemoFrameStyled,
  MobileDemoImgStyled,
} from "./styles";

type Props = {
  projectId: string;
};

const MobileDemo: FC<Props> = ({ projectId }) => {
  return (
    <MobileDemoContainerStyled>
      <MobileDemoImgStyled
        src={`/images/projects/mobile-${projectId}.png`}
        width={140}
        height={296}
        alt="project demo image"
      />
      <MobileDemoFrameStyled
        src="/images/iphone.webp"
        width={160}
        height={320}
        alt=""
        aria-hidden="true"
        role="presentation"
      />
    </MobileDemoContainerStyled>
  );
};

export default MobileDemo;
