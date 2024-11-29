import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pydf, pyiab, pyiae, pynode, pytraversal } from "./code";

export default function CircularLinkedList() {
  return (
    <PageContainer pageTitle="Circular Linked List" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>the next of the last node points at head</LI>
          <LI>
            Advantage: whole list can be traversed from any node; implementation
            of round robin
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Node</Heading>
        <CodeBlock languages={["python"]} snippets={[pynode]} />
      </SectionContainer>

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
