import React from "react";
import {
  Complexity,
  H2,
  LI,
  PageSectionContainer,
  Section,
  SolutionBlock2,
  TEXT,
  TEXT2,
  UL,
} from "../../../../components";

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <Section>
        <H2>Merge Sort</H2>
        <UL>
          <LI>Divide and conquer algo</LI>
          <LI>Stable sorting</LI>
          <LI>Well suited for LL | Quick sort better for list</LI>
          <LI>
            <Complexity time="θ(n log n)" space="O(n)" />
          </LI>
        </UL>
        <SolutionBlock2
          title="Implementation"
          folder="list"
          file="merge_sort"
        />
      </Section>

      <Section>
        <H2>Quick Sort</H2>
        <UL>
          <LI>Divide and conquer algo</LI>
          <LI>Worst case: O(n^2)</LI>
          <LI>
            considered faster - in place, cache friendly, avg O(nlogn), tail
            recursive
          </LI>
          <LI>
            Array partition: Choose 1 element and bring all smaller elements on
            left and larger on right.
          </LI>
          <LI>
            2 partition algorithm: Lomuto & Hoare's
            <Section>
              <TEXT className="underline">Lumoto Partition</TEXT>
              <SolutionBlock2
                title="Implementation"
                folder="list"
                file="lumoto"
              />
              <TEXT className="underline">Hoare's Partition</TEXT>
              <TEXT2>
                # does not guarantee that pivot element is at correct position
              </TEXT2>
              <SolutionBlock2
                title="Implementation"
                folder="list"
                file="hoares"
              />
            </Section>
          </LI>
        </UL>
      </Section>
      <Section>
        <H2>Heap Sort</H2>
        <UL>
          <LI>Optimization over selection sort</LI>
          <LI>Not stable sorting</LI>
          <LI>Used in hybrid sorting algo like Intro Sort</LI>
          <LI>
            <Complexity time="O(n log n)" space="Space: O(1)" />
          </LI>
        </UL>
        <SolutionBlock2 title="Implementation" folder="list" file="heap_sort" />
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
