import CodeBlock from "@/components/code-block";
import { Complexity } from "@/components/complexity";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { LI, UL } from "@/components/ul-li";
import { Heading } from "@/components/text";
import { pybinarySearch, pybsrotated, pymediansorted } from "./code";

export default function BinarySearch() {
  return (
    <PageContainer pageTitle="Binary Search" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Used for searching in sorted array</LI>
        </UL>
        <Complexity
          time="O(log n)"
          timeVariant={"fair"}
          space="O(1)"
          spaceVariant={"excellent"}
        />
        <CodeBlock languages={["python"]} snippets={[pybinarySearch]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Search in sorted rotated array</Heading>
        <CodeBlock languages={["python"]} snippets={[pybsrotated]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Median of 2 sorted array</Heading>
        <CodeBlock languages={["python"]} snippets={[pymediansorted]} />
      </SectionContainer>
    </PageContainer>
  );
}
