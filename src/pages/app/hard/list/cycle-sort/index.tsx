import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  SpaceTimeComplexity,
  LanguageSections,
  CodeBlock,
} from "@/components/blocks";
import { pycyclesort } from "./code";

export default function CycleSort() {
  return (
    <PageContainer pageTitle="Cycle Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>does minimum memory writes</LI>
          <LI>Not stable sorting</LI>
          <LI>In place</LI>
          <LI>
            Worst case:
            <SpaceTimeComplexity
              time="θ(n ^ 2)"
              timeLevel={4}
              space="O(1)"
              spaceLevel={1}
            />
          </LI>
          <LI>Helps to solve ques like min swap to sort the array</LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pycyclesort} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
