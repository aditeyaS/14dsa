import React from "react";
import { PageContainer } from "../../../components";
import { StringIcon } from "../../../icons";
import { Intro } from "./intro";

const String: React.FC = () => {
  return (
    <PageContainer title="String" icon={<StringIcon />}>
      <Intro />
    </PageContainer>
  );
};
export default String;
