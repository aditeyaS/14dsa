import React from "react";
import {
  Complexity,
  H2,
  LI,
  PageContainer,
  PageSectionContainer,
  Section,
  SolutionBlock2,
  UL,
} from "../../../../components";
import { Solutions } from "./solutions";

const ListSearch: React.FC = () => {
  return (
    <PageContainer title="Search">
      <PageSectionContainer>
        <Section>
          <H2>Binary Search</H2>
          <UL>
            <LI>Used for searching in sorted array</LI>
            <LI>
              <Complexity time="O(log n)" space="O(1)" />
            </LI>
          </UL>
          <SolutionBlock2
            title="Implementation"
            folder="list"
            file="binary_search"
          />
        </Section>
      </PageSectionContainer>
      <Solutions />
    </PageContainer>
  );
};

export default ListSearch;
