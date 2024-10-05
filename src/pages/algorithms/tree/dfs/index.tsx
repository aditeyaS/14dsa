import React from "react";
import { PageContainer } from "../../../../components";
import Intro from "./intro";
import { Solutions } from "./solutions";

const DFS: React.FC = () => {
  return (
    <PageContainer title="DFS">
      <Intro />
      <Solutions />
    </PageContainer>
  );
};

export default DFS;
