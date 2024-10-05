import React from "react";
import { PageContainer } from "../../../components";
import { BinaryTreeIcon } from "../../../icons";
import { Intro } from "./intro";
import { Questions } from "./questions";

const BinarySearchTree: React.FC = () => {
  return (
    <PageContainer title="Binary Search Tree" icon={<BinaryTreeIcon />}>
      <Intro />
      <Questions />
    </PageContainer>
  );
};

export default BinarySearchTree;
