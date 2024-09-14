import React from "react";
import { PageContainer } from "../../../components";
import { HeapIcon } from "../../../icons";
import { Intro } from "./intro";

export const Heap: React.FC = () => {
  return (
    <PageContainer title="Heap" icon={<HeapIcon />}>
      <Intro />
    </PageContainer>
  );
};
