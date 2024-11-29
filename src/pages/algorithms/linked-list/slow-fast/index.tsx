import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Paragraph } from "@/components/text";
import { pyslowFast } from "./code";

export default function SlowFast() {
  return (
    <PageContainer pageTitle="Slow Fast" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Paragraph>
          We take two pointers and move them at different speeds. Examples:
        </Paragraph>
        <CodeBlock languages={["python"]} snippets={[pyslowFast]} />
      </SectionContainer>
    </PageContainer>
  );
}
