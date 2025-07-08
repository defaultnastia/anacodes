"use client";

import React, { type FC } from "react";
import { getTechStack } from "@/data/getTechStack";
import { Box, Stack, Typography } from "@mui/material";
import {
  AccentSeparatorStyled,
  CategoryCard,
  CategoryTitle,
  HeaderContainerStyled,
  Item,
  ItemList,
  TechStackSection,
} from "./styles";

const TechStackGrid: FC = () => {
  const techStack = getTechStack();

  return (
    <>
      <Stack flexDirection="row">
        <AccentSeparatorStyled />
        <HeaderContainerStyled>
          <Typography variant="h4">Tech</Typography>
          <Typography variant="captionMedium">Stack</Typography>
        </HeaderContainerStyled>
      </Stack>
      <TechStackSection>
        {Object.entries(techStack).map(([category, items]) => (
          <CategoryCard key={category}>
            <CategoryTitle variant="h4">{category}</CategoryTitle>
            <ItemList>
              {items.map(({ name, icon: Icon }) => (
                <Item key={name}>
                  <Icon />
                  <Typography variant="bodyRegular">{name}</Typography>
                </Item>
              ))}
            </ItemList>
          </CategoryCard>
        ))}
      </TechStackSection>
    </>
  );
};

export default TechStackGrid;
