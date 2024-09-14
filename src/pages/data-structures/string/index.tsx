import React from "react";
import { PageContainer } from "../../../components";
import { StringIcon } from "../../../icons";
import { Intro } from "./intro";

export const String: React.FC = () => {
  return (
    <PageContainer title="String" icon={<StringIcon />}>
      <Intro />
    </PageContainer>
  );
};
