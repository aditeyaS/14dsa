import React from "react";
import { PageContainer } from "../../../components";
import { TreeIcon } from "../../../icons";
import { Questions } from "./questions";
import { Intro } from "./intro";

const Tree: React.FC = () => {
  return (
    <PageContainer title="Tree" icon={<TreeIcon />}>
      <Intro />
      <Questions />
    </PageContainer>
  );
};

export default Tree;
