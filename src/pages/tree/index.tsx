import React from "react";
import { PageContainer } from "../../components";
import { TreeIcon } from "../../icons";
import { Questions } from "./questions";

export const Tree: React.FC = () => {
  return (
    <PageContainer title="Tree" icon={<TreeIcon />}>
      <Questions />
    </PageContainer>
  );
};
