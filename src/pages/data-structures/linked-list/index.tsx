import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pyde, pydf, pyiab, pyiae, pyiai, pynode, pysearch } from "./code";

export default function LinkedList() {
  return (
    <PageContainer pageTitle="Linked List" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Nodes stored in non contiguous memory</LI>
          <LI>
            Applications: Round robin, places where insert/delete at beginning
            should be O(1)
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Node</Heading>
        <CodeBlock languages={["python"]} snippets={[pynode]} />
      </SectionContainer>

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
