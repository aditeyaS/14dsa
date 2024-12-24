import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, CodeBlock, LanguageSections } from "@/components/blocks";
import { pydf, pyiab, pyiae, pytraversal } from "./code";

export default function CircularLinkedList() {
  return (
    <PageContainer pageTitle="Circular Linked List" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Traversal</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pytraversal} />]}
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
        <Heading>Delete first</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pydf} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
