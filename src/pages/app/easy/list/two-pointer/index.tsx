import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  UL,
} from "@/components/blocks";
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
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pypairsumx} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
