import React from "react";
import { PageContainer } from "../../../components";
import { DequeIcon } from "../../../icons";
import { Intro } from "./intro";

const Deque: React.FC = () => {
  return (
    <PageContainer title="Deque" icon={<DequeIcon />}>
      <Intro />
    </PageContainer>
  );
};

export default Deque;
