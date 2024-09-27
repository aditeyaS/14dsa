import React from "react";
import { Intro } from "./intro";
import { PageContainer } from "../../../components";
import { RecursionIcon } from "../../../icons";

const Recursion: React.FC = () => {
  return (
    <PageContainer title="Recursion" icon={<RecursionIcon />}>
      <Intro />
    </PageContainer>
  );
};

export default Recursion;
