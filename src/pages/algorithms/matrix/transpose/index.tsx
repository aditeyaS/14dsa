import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { pytranspose } from "./code";
import { Heading } from "@/components/text";

export default function TransposeMatrix() {
  return (
    <PageContainer
      pageTitle="Transpose"
      contributors={["aditeyaS"]}
      seoDescription="Transpose of a Matrix"
    >
      <SectionContainer>
        <Heading>Square Matrix</Heading>
        <CodeBlock languages={["python"]} snippets={[pytranspose]} />
      </SectionContainer>
    </PageContainer>
  );
}
