import React, { type FC } from "react";
import { Link } from "@mui/material";

import Icon from "../Icon";
import data from "../../../data/socials.json";
import { SocialsListItemStyled, SocialsListStyled } from "./styles";

const Socials: FC = () => {
  return (
    <SocialsListStyled>
      {data.map(({ href, icon, label }) => (
        <SocialsListItemStyled key={icon}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon name={icon} size={40} />
          </Link>
        </SocialsListItemStyled>
      ))}
    </SocialsListStyled>
  );
};

export default Socials;
