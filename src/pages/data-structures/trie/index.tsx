import React from "react";
import { PageContainer } from "../../../components";
import { TrieIcon } from "../../../icons";
import { Intro } from "./intro";

const Trie: React.FC = () => {
  return (
    <PageContainer title="Trie" icon={<TrieIcon />}>
      <Intro />
    </PageContainer>
  );
};

export default Trie;
