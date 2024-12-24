import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, LanguageSections, CodeBlock } from "@/components/blocks";
import { pyde, pydf, pyiab, pyiae, pyiai, pysearch } from "./code";

export default function SinglyLinkedList() {
  return (
    <PageContainer pageTitle="Singly Linked List" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Search</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pysearch} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Insert at beginning</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyiab} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Insert at end</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyiae} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Insert at index</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyiai} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete first</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pydf} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete end</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyde} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
