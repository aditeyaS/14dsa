import React from "react";
import { PageContainer } from "../../../components";
import { CircularLinkedListIcon } from "../../../icons";
import { Intro } from "./intro";

const CircularLinkedList: React.FC = () => {
  return (
    <PageContainer
      title="Circular Linked List"
      icon={<CircularLinkedListIcon />}
    >
      <Intro />
    </PageContainer>
  );
};
export default CircularLinkedList;
