import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { LI, UL } from "@/components/ul-li";
import { Heading } from "@/components/text";
import { pylumoto, pyhoares } from "./code";

export default function QuickSort() {
  return (
    <PageContainer pageTitle="Quick Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Divide and conquer algo</LI>
          <LI>
            considered faster - in place, cache friendly, avg O(nlogn), tail
            recursive
          </LI>
          <LI>
            Array partition: Choose 1 element and bring all smaller elements on
            left and larger on right.
          </LI>
          <LI>2 partition algorithm: Lomuto & Hoare's</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading className="underline">Lumoto Partition</Heading>
        <CodeBlock languages={["python"]} snippets={[pylumoto]} />
      </SectionContainer>

      <SectionContainer>
        <Heading className="underline">Hoare's Partition</Heading>
        <CodeBlock languages={["python"]} snippets={[pyhoares]} />
      </SectionContainer>
    </PageContainer>
  );
}
