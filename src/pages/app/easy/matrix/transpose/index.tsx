import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, LanguageSections, CodeBlock } from "@/components/blocks";
import { pytranspose } from "./code";

export default function TransposeMatrix() {
  return (
    <PageContainer
      pageTitle="Transpose"
      contributors={["aditeyaS"]}
      seoDescription="Transpose of a Matrix"
    >
      <SectionContainer>
        <Heading>Square Matrix</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pytranspose} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
