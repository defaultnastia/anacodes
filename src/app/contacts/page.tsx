"use client";

import { Download } from "lucide-react";
import { Typography } from "@mui/material";
import React from "react";

import {
  ContactContainerStyled,
  DownloadButtonStyled,
  DownloadSectionStyled,
  EmailLinkStyled,
} from "./styles";
import { DottedBackgroundStyled } from "../styles/styles";
import Socials from "../components/contacts/Socials";
import { COLORS } from "../styles/muiTheme";

const ContactPage = () => {
  return (
    <DottedBackgroundStyled>
      <ContactContainerStyled>
        <Typography variant="h3" component="h1">
          Contact Me
        </Typography>

        <Typography>
          I&apos;m currently based in <strong>Barcelona</strong> and have a
          valid work permit.
        </Typography>

        <Typography>
          While I&apos;m still learning Spanish, I speak English fluently and
          have worked in international teams for over <strong>8 years</strong>.
        </Typography>

        <Typography>
          Feel free to reach out:{" "}
          <EmailLinkStyled href="mailto:anastayaaa@gmail.com">
            anastayaaa@gmail.com
          </EmailLinkStyled>
        </Typography>

        <Socials />

        <DownloadSectionStyled>
          <Typography>And Don&apos;t Forget To</Typography>
          <DownloadButtonStyled
            href="/documents/Anastasiia_Drachuk_Developer.pdf"
            download
          >
            <Download color={COLORS.FOREGROUND} />
            <Typography variant="link">Download My CV</Typography>
          </DownloadButtonStyled>
        </DownloadSectionStyled>
      </ContactContainerStyled>
    </DottedBackgroundStyled>
  );
};

export default ContactPage;
