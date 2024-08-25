import React from "react";
import { PageContainer } from "../../components";
import { MatrixIcon } from "../../icons";
import { Intro } from "./intro";

export const Matrix: React.FC = () => {
  return (
    <PageContainer title="Matrix" icon={<MatrixIcon />}>
      <Intro />
    </PageContainer>
  );
};
