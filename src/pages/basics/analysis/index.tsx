import React from "react";
import { PageContainer } from "../../../components";
import { AnalysisIcon } from "../../../icons";
import { Intro } from "./intro";

export const Analysis: React.FC = () => {
  return (
    <PageContainer title="Analysis" icon={<AnalysisIcon />}>
      <Intro />
    </PageContainer>
  );
};
