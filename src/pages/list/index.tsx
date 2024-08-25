import React from "react";
import { ListIcon } from "../../icons";
import { PageContainer } from "../../components";
import { Intro } from "./intro";
import { Articles } from "./articles";

export const List: React.FC = () => {
  return (
    <PageContainer title="List" icon={<ListIcon />}>
      <Intro />
      <Articles />
    </PageContainer>
  );
};
