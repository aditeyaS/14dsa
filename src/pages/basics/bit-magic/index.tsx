import React from "react";
import { PageContainer } from "../../../components";
import { BitMagicIcon } from "../../../icons";
import { Intro } from "./intro";
import { Solutions } from "./solutions";

const BitMagic: React.FC = () => {
  return (
    <PageContainer title="Bit Magic" icon={<BitMagicIcon />}>
      <Intro />
      <Solutions />
    </PageContainer>
  );
};

export default BitMagic;
