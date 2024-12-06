import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { pyde, pydf, pyiab, pyiae, pyiai, pysearch } from "./code";

export default function SingleLinkedList() {
  return (
    <PageContainer pageTitle="Single Linked List" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Search</Heading>
        <CodeBlock languages={["python"]} snippets={[pysearch]} />
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
        <Heading>Insert at index</Heading>
        <CodeBlock languages={["python"]} snippets={[pyiai]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete first</Heading>
        <CodeBlock languages={["python"]} snippets={[pydf]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete end</Heading>
        <CodeBlock languages={["python"]} snippets={[pyde]} />
      </SectionContainer>
    </PageContainer>
  );
}
