import CodeBlock from "@/components/code-block";
import { Complexity } from "@/components/complexity";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { LI, UL } from "@/components/ul-li";
import { pyheapsort } from "./code";

export default function HeapSort() {
  return (
    <PageContainer pageTitle="Heap Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Optimization over selection sort</LI>
          <LI>Not stable sorting</LI>
          <LI>Used in hybrid sorting algo like Intro Sort</LI>
        </UL>
        <Complexity
          time="θ(n log n)"
          timeVariant={"bad"}
          space="O(1)"
          spaceVariant={"excellent"}
        />
        <CodeBlock languages={["python"]} snippets={[pyheapsort]} />
      </SectionContainer>
    </PageContainer>
  );
}
