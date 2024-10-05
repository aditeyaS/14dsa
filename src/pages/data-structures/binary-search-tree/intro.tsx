import { LI, PageSectionContainer, UL } from "../../../components";

export const Intro = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>{`left.val < right.val`}</LI>
        <LI>all keys are typically distinct</LI>
        <LI>search, insert, delete - O(log n)</LI>
        <LI>find closest - O(log n)</LI>
        <LI>sorted traversal - O(n)</LI>
      </UL>
    </PageSectionContainer>
  );
};
