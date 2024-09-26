import React from "react";
import { PageContainer } from "../../../components";
import { HeapIcon } from "../../../icons";
import { Intro } from "./intro";

const Heap: React.FC = () => {
  return (
    <PageContainer title="Heap" icon={<HeapIcon />}>
      <Intro />
    </PageContainer>
  );
};

export default Heap;
