import { Box } from "@mui/material";
import React, { type FC } from "react";

interface Props {
  name: string;
  size?: number;
}

const Icon: FC<Props> = ({ name, size = 40 }) => {
  return (
    <Box>
      <svg width={size} height={size}>
        <use xlinkHref={`/images/icons.svg#icon-${name}`} />
      </svg>
    </Box>
  );
};

export default Icon;
