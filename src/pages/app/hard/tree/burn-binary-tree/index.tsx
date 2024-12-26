import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { CodeBlock, LanguageSections, Paragraph } from "@/components/blocks";
import { pybbt } from "./code";

export default function BurnBinaryTree() {
  return (
    <PageContainer pageTitle="Burn Binary Tree" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Paragraph>Finding the farthest node from a given node</Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pybbt} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
