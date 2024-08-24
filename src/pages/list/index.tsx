import React from "react";
import { ListIcon } from "../../icons";
import { PageContainer } from "../../components";
import { Intro } from "./intro";

export const List: React.FC = () => {
  return (
    <PageContainer title="List" icon={<ListIcon />}>
      <Intro />
    </PageContainer>
  );
};
