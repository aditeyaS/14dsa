import React from "react";
import { PageContainer } from "../../../components";
import { MatrixIcon } from "../../../icons";
import { Intro } from "./intro";

const Matrix: React.FC = () => {
  return (
    <PageContainer title="Matrix" icon={<MatrixIcon />}>
      <Intro />
    </PageContainer>
  );
};

export default Matrix;
