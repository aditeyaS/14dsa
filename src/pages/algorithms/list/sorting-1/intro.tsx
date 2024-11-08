import React from "react";
import {
  Complexity,
  H2,
  LI,
  PageSectionContainer,
  Section,
  SolutionBlock2,
  UL,
} from "../../../../components";

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>
          Stability in sorting: Order of occurrence is maintained when values
          are same
        </LI>
        <LI>sort() and sorted() are stable</LI>
      </UL>
      <Section>
        <H2>Bubble Sort</H2>
        <UL>
          <LI>Stable sorting</LI>
          <LI>
            <Complexity time="O(n^2)" space="O(1)" />
          </LI>
        </UL>
        <SolutionBlock2
          title="Implementation"
          folder="list"
          file="bubble_sort"
        />
      </Section>
      <Section>
        <H2>Selection Sort</H2>
        <UL>
          <LI>Not stable</LI>
          <LI>
            <Complexity time="θ(n^2)" space="O(1)" />
          </LI>
        </UL>
        <SolutionBlock2
          title="Implementation"
          folder="list"
          file="selection_sort"
        />
      </Section>
      <Section>
        <H2>Insertion Sort</H2>
        <UL>
          <LI>Stable sorting</LI>
          <LI>Time: Best - O(n) | Avg,Worst - O(n^2)</LI>
          <LI>
            <Complexity time="O(n^2)" space="O(1)" />
          </LI>
        </UL>
        <SolutionBlock2
          title="Implementation"
          folder="list"
          file="insertion_sort"
        />
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
