import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Alert } from "@/components/alert";
import { Paragraph } from "@/components/text";
import { pyGcd } from "./code";

export default function Euclidean() {
  return (
    <PageContainer pageTitle="Euclidean" contributors={["aditeyaS"]}>
      <SectionContainer>
        <CodeBlock languages={["python"]} snippets={[pyGcd]}></CodeBlock>
      </SectionContainer>
      <SectionContainer>
        <Alert type="Tip">
          <Paragraph>To find LCM: a * b = gcd * lcm</Paragraph>
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
