import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pypairsumx } from "./code";

export default function TwoPointer() {
  return (
    <PageContainer pageTitle="Two Pointer" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>
            2 pointers are used - left & right, slow & fast depending on the
            situation
          </LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Find if there is a pair with sum x in sorted array</Heading>
        <CodeBlock languages={["python"]} snippets={[pypairsumx]} />
      </SectionContainer>
    </PageContainer>
  );
}
