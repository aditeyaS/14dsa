import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";

import {
  Alert,
  CodeBlock,
  LanguageSections,
  Paragraph,
} from "@/components/blocks";
import { pyGcd } from "./code";

export default function Euclidean() {
  return (
    <PageContainer pageTitle="Euclidean" contributors={["aditeyaS"]}>
      <SectionContainer>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pyGcd}></CodeBlock>
            </>,
          ]}
        />
      </SectionContainer>
      <SectionContainer>
        <Alert type="Tip">
          <Paragraph>To find LCM: a * b = gcd * lcm</Paragraph>
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
