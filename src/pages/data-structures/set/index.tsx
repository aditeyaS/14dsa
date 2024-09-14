import React from "react";
import { PageContainer } from "../../../components";
import { SetIcon } from "../../../icons";
import { Intro } from "./intro";

export const Set: React.FC = () => {
  return (
    <PageContainer title="Set" icon={<SetIcon />}>
      <Intro />
    </PageContainer>
  );
};
