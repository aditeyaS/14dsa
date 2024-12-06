import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { pydf, pyiab, pyiae, pytraversal } from "./code";

export default function CircularLinkedList() {
  return (
    <PageContainer pageTitle="Circular Linked List" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Traversal</Heading>
        <CodeBlock languages={["python"]} snippets={[pytraversal]} />
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
    </PageContainer>
  );
}
