import React from "react";
import { PageContainer } from "../../../components";
import { TupleIcon } from "../../../icons";
import { Intro } from "./intro";

const Tuple: React.FC = () => {
  return (
    <PageContainer title="Tuple" icon={<TupleIcon />}>
      <Intro />
    </PageContainer>
  );
};

export default Tuple;
