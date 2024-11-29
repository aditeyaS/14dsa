import CodeBlock from "@/components/code-block";
import { Complexity } from "@/components/complexity";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { LI, UL } from "@/components/ul-li";
import { pymergesort } from "./code";

export default function MergeSort() {
  return (
    <PageContainer pageTitle="Merge Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Divide and conquer algo</LI>
          <LI>Stable sorting</LI>
          <LI>Well suited for LL | Quick sort better for list</LI>
        </UL>
        <Complexity
          time="θ(n log n)"
          timeVariant={"bad"}
          space="O(n)"
          spaceVariant={"fair"}
        />
        <CodeBlock languages={["python"]} snippets={[pymergesort]} />
      </SectionContainer>
    </PageContainer>
  );
}
