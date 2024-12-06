import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { pydf, pydl, pyiab, pyiae } from "./code";

export default function DoublyLinkedList() {
  return (
    <PageContainer pageTitle="Doubly Linked List" contributors={["aditeyaS"]}>
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
