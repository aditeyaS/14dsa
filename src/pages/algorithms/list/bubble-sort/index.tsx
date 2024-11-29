import CodeBlock from "@/components/code-block";
import { Complexity } from "@/components/complexity";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { LI, UL } from "@/components/ul-li";
import { pybubblesort } from "./code";

export default function BubbleSort() {
  return (
    <PageContainer pageTitle="Bubble Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Stable sorting</LI>
        </UL>
        <Complexity
          time="O(n^2)"
          timeVariant={"horrible"}
          space="O(1)"
          spaceVariant={"excellent"}
        />
        <CodeBlock languages={["python"]} snippets={[pybubblesort]} />
      </SectionContainer>
    </PageContainer>
  );
}
