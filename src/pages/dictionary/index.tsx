import React from "react";
import { PageContainer } from "../../components";
import { DictionaryIcon } from "../../icons";
import { Intro } from "./intro";

export const Dictionary: React.FC = () => {
  return (
    <PageContainer title="Dictionary" icon={<DictionaryIcon />}>
      <Intro />
    </PageContainer>
  );
};
