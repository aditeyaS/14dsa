import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";

import { LI, UL } from "@/components/blocks";

export default function RBTree() {
  return (
    <PageContainer pageTitle="Red Black Tree" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Every node is either Red or Black</LI>
          <LI>root is Black</LI>
          <LI>No two consecutive Red</LI>
          <LI>
            number of Black nodes from every node to all of it's descendant
            leaves should be same
          </LI>
        </UL>
      </SectionContainer>
    </PageContainer>
  );
}
