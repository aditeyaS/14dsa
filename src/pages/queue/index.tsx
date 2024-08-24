import React from "react";
import { PageContainer } from "../../components";
import { QueueIcon } from "../../icons";

export const Queue: React.FC = () => {
  return (
    <PageContainer title="Stack" icon={<QueueIcon />}>
      Queue
    </PageContainer>
  );
};
