import React from "react";
import { PageContainer } from "../../../components";
import { StackIcon } from "../../../icons";
import { Intro } from "./intro";

const Stack: React.FC = () => {
  return (
    <PageContainer title="Stack" icon={<StackIcon />}>
      <Intro />
    </PageContainer>
  );
};

export default Stack;
