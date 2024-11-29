import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pydf, pydl, pyiab, pyiae, pynode } from "./code";

export default function DoublyLinkedList() {
  return (
    <PageContainer pageTitle="Doubly Linked List" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>
            Advantage: traverse in both dir, insert/delete before node,
            insert/delete form both ends in O(1) by maintaining tail
          </LI>
          <LI>Disadvantages: extra space, complex code</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Node</Heading>
        <CodeBlock languages={["python"]} snippets={[pynode]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Insert at beginning</Heading>
        <CodeBlock languages={["python"]} snippets={[pyiab]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Insert at end</Heading>
        <CodeBlock languages={["python"]} snippets={[pyiae]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete first</Heading>
        <CodeBlock languages={["python"]} snippets={[pydf]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete last</Heading>
        <CodeBlock languages={["python"]} snippets={[pydl]} />
      </SectionContainer>
    </PageContainer>
  );
}
