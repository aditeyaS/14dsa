import React from "react";
import { PageContainer } from "../../components";
import { RecursionIcon } from "../../icons";
import { Intro } from "./intro";

export const Recursion: React.FC = () => {
  return (
    <PageContainer title="Recursion" icon={<RecursionIcon />}>
      <Intro />
    </PageContainer>
  );
};
