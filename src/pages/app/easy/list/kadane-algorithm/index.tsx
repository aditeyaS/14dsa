import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LanguageSections,
  CodeBlock,
  LI,
  OL,
  Heading2,
} from "@/components/blocks";
import { pymaxSubArraySum } from "./code";

export default function KadaneAlgorithm() {
  return (
    <PageContainer pageTitle="Kadane's Algorithm" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading2>Maximum length even odd subarray</Heading2>
        <OL>
          At every element you have 2 choices:
          <LI>You extend the current window</LI>
          <LI>Start a new window</LI>
        </OL>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pymaxSubArraySum} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
