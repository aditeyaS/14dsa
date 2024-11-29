import CodeBlock from "@/components/code-block";
import { Complexity } from "@/components/complexity";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { LI, UL } from "@/components/ul-li";
import { pyselectionsort } from "./code";

export default function SelectionSort() {
  return (
    <PageContainer pageTitle="Selection Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Not Stable</LI>
        </UL>
        <Complexity
          time="θ(n^2)"
          timeVariant={"horrible"}
          space="O(1)"
          spaceVariant={"excellent"}
        />
        <CodeBlock languages={["python"]} snippets={[pyselectionsort]} />
      </SectionContainer>
    </PageContainer>
  );
}
