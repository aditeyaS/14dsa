import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, LanguageSections, CodeBlock } from "@/components/blocks";
import { pydf, pydl, pyiab, pyiae } from "./code";

export default function DoublyLinkedList() {
  return (
    <PageContainer pageTitle="Doubly Linked List" contributors={["aditeyaS"]}>
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
        <Heading>Delete first</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pydf} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete last</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pydl} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
