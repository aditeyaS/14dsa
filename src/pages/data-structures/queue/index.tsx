import React from "react";
import { PageContainer } from "../../../components";
import { QueueIcon } from "../../../icons";
import { Intro } from "./intro";

export const Queue: React.FC = () => {
  return (
    <PageContainer title="Queue" icon={<QueueIcon />}>
      <Intro />
    </PageContainer>
  );
};
