import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";

import RotationImage from "./rotation-image";
import { Paragraph } from "@/components/blocks";

export default function SelfBalancingBST() {
  return (
    <PageContainer pageTitle="Self Balancing BST" contributors={["aditeyaS"]}>
      <SectionContainer>
        <RotationImage />
        <Paragraph>{`T1 < y < T2 < x < T3`}</Paragraph>
      </SectionContainer>
    </PageContainer>
  );
}
