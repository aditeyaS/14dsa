import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pydelete, pyinsert, pynode, pysearch } from "./code";
import { Separator } from "@/components/ui/separator";

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
        <CodeBlock languages={["python"]} snippets={[pynode]} />
        <Paragraph>Insert</Paragraph>
        <CodeBlock languages={["python"]} snippets={[pyinsert]} />
        <Paragraph>Search</Paragraph>
        <CodeBlock languages={["python"]} snippets={[pysearch]} />
        <Paragraph>Delete</Paragraph>
        <CodeBlock languages={["python"]} snippets={[pydelete]} />
      </SectionContainer>
    </PageContainer>
  );
}
