import React from "react";
import { PageContainer } from "../../../components";
import { BitMagicIcon } from "../../../icons";
import { Intro } from "./intro";

export const BitMagic: React.FC = () => {
  return (
    <PageContainer title="Bit Magic" icon={<BitMagicIcon />}>
      <Intro />
    </PageContainer>
  );
};
