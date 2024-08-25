import React from "react";
import { PageContainer } from "../../components";
import { QueueIcon } from "../../icons";

export const Queue: React.FC = () => {
  return (
    <PageContainer title="Queue" icon={<QueueIcon />}>
      Queue
    </PageContainer>
  );
};
