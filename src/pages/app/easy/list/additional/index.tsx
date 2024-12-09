import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Heading,
  Paragraph,
  LanguageSections,
  CodeBlock,
} from "@/components/blocks";
import { pymajorityElement, pymaxSubArraySum } from "./code";

export default function Additional() {
  return (
    <PageContainer pageTitle="Additional" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Kadane’s Algorithm</Heading>
        <Paragraph>Maximum length even odd subarray</Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pymaxSubArraySum} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Boyer-Moore Majority Voting Algorithm</Heading>
        <Paragraph>Majority element</Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pymajorityElement} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
