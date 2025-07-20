import Link from "next/link";
import React, { type FC } from "react";
import { Typography } from "@mui/material";

import { DemoLinksListStyled, DemoLinkItemStyled } from "./styles";

type Props = {
  links: { name: string; link: string }[];
};

// == == == == ‼ Add a dialog before release !! == == == ==

const DemoLinksSection: FC<Props> = ({ links }) => {
  return (
    <DemoLinksListStyled>
      {/* <DemoLinkItemStyled>
        <Link href="">
          <Typography>Details</Typography>
        </Link>
      </DemoLinkItemStyled> */}

      {links.map((link) => (
        <DemoLinkItemStyled key={link.link}>
          <Link href={link.link} target="_blank" rel="noreferrer">
            <Typography>{link.name} ↗</Typography>
          </Link>
        </DemoLinkItemStyled>
      ))}
    </DemoLinksListStyled>
  );
};

export default DemoLinksSection;
