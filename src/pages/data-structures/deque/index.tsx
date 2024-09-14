import React from "react";
import { PageContainer } from "../../../components";
import { DequeIcon } from "../../../icons";
import { Intro } from "./intro";

export const Deque: React.FC = () => {
  return (
    <PageContainer title="Deque" icon={<DequeIcon />}>
      <Intro />
    </PageContainer>
  );
};
