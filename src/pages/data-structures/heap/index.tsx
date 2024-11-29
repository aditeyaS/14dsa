import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { Alert } from "@/components/alert";
import { pyheapq, pyminheap } from "./code";

export default function Heap() {
  return (
    <PageContainer pageTitle="Heap" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Binary Heap</Heading>
        <UL>
          <LI>used in HeapSort</LI>
          <LI>it is a complete binary tree</LI>
          <LI>used to implement Priority Queue</LI>
          <LI>2 types: Min heap; Max heap</LI>
          <LI>Min Heap (highest priority item assigned lowest value)</LI>
          <LI>Max Heap (highest priority item assigned highest value)</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Min Heap</Heading>
        <UL>
          <LI>complete binary tree</LI>
          <LI>every node has value smaller than it's descendants</LI>
          <LI>
            Array implementation: left(i) = 2i + 1; right(i) = 2i + 2; parent(i)
            = (i-1)//2
          </LI>
        </UL>
        <CodeBlock languages={["python"]} snippets={[pyminheap]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>heapq</Heading>
        <CodeBlock languages={["python"]} snippets={[pyheapq]} />
        <Alert type="Important">
          <Paragraph>Python implements heapq as min heap.</Paragraph>
        </Alert>
        <Alert type="Tip">
          <Paragraph>
            To implement max heap multiply elements by -1 before storing
          </Paragraph>
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
