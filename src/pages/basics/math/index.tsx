import React from "react";
import { PageContainer } from "../../../components";
import { MathIcon } from "../../../icons";
import { Intro } from "./intro";
import { Questions } from "./questions";
import { Solutions } from "./solutions";

const Math: React.FC = () => {
  return (
    <PageContainer title="Math" icon={<MathIcon />}>
      <Intro />
      <Solutions />
      <Questions />
    </PageContainer>
  );
};
export default Math;
