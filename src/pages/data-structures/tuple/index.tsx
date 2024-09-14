import React from "react";
import { PageContainer } from "../../../components";
import { TupleIcon } from "../../../icons";
import { Intro } from "./intro";

export const Tuple: React.FC = () => {
  return (
    <PageContainer title="Tuple" icon={<TupleIcon />}>
      <Intro />
    </PageContainer>
  );
};
