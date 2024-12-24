import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Paragraph, LanguageSections, CodeBlock } from "@/components/blocks";
import { pyslowFast } from "./code";

export default function SlowFast() {
  return (
    <PageContainer pageTitle="Slow Fast" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Paragraph>
          We take two pointers and move them at different speeds. Examples:
        </Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyslowFast} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
