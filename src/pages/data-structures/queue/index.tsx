import React from "react";
import { PageContainer } from "../../../components";
import { QueueIcon } from "../../../icons";
import { Intro } from "./intro";

const Queue: React.FC = () => {
  return (
    <PageContainer title="Queue" icon={<QueueIcon />}>
      <Intro />
    </PageContainer>
  );
};

export default Queue;
