import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Heading,
  Paragraph,
  LanguageSections,
  CodeBlock,
} from "@/components/blocks";
import { Separator } from "@/components/ui/separator";
import { pydelete, pyinsert, pynode, pysearch } from "./code";

export default function Trie() {
  return (
    <PageContainer pageTitle="Trie" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>prefix tree</LI>
          <LI>data is stored in the edges</LI>
          <LI>
            Depending on the use case the children of the node can be set, dict,
            etc.
          </LI>
        </UL>
      </SectionContainer>
      <Separator />
      <SectionContainer>
        <Heading>Example</Heading>
        <Paragraph>Node</Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pynode} />
            </>,
          ]}
        />
        <Paragraph>Insert</Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pyinsert} />
            </>,
          ]}
        />

        <Paragraph>Search</Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pysearch} />
            </>,
          ]}
        />

        <Paragraph>Delete</Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pydelete} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
