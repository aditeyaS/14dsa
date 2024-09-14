import React from "react";
import { PageContainer } from "../../../components";
import { MathIcon } from "../../../icons";
import { Intro } from "./intro";
import { Questions } from "./questions";

export const Math: React.FC = () => {
  return (
    <PageContainer title="Math" icon={<MathIcon />}>
      <Intro />
      <Questions />
    </PageContainer>
  );
};
