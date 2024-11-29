import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { LI, UL } from "@/components/ul-li";

export default function Trie() {
  return (
    <PageContainer pageTitle="Trie" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>prefix tree</LI>
        </UL>
      </SectionContainer>
    </PageContainer>
  );
}
