import React from "react";
import { ListIcon } from "../../../icons";
import { PageContainer } from "../../../components";
import { Intro } from "./intro";
import { Articles } from "./articles";
import { Questions } from "./questions";

export const List: React.FC = () => {
  return (
    <PageContainer title="List" icon={<ListIcon />}>
      <Intro />
      <Articles />
      <Questions />
    </PageContainer>
  );
};
