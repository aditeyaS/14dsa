import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { CodeBlock, LanguageSections, Paragraph2 } from "@/components/blocks";
import { pysd } from "./code";

export default function Serialization() {
  return (
    <PageContainer pageTitle="Serialization" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Paragraph2>Assumption: -1 is not present</Paragraph2>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pysd} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
