import React from "react";
import { PageContainer } from "../../../components";
import { DoublyLinkedListIcon } from "../../../icons";
import { Intro } from "./intro";

const DoublyLinkedList: React.FC = () => {
  return (
    <PageContainer title="Doubly Linked List" icon={<DoublyLinkedListIcon />}>
      <Intro />
    </PageContainer>
  );
};
export default DoublyLinkedList;
