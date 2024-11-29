import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { pymajorityElement, pymaxSubArraySum } from "./code";

export default function Additional() {
  return (
    <PageContainer pageTitle="Additional" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Kadane’s Algorithm</Heading>
        <Paragraph>Maximum length even odd subarray</Paragraph>
        <CodeBlock languages={["python"]} snippets={[pymaxSubArraySum]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Boyer-Moore Majority Voting Algorithm</Heading>
        <Paragraph>Majority element</Paragraph>
        <CodeBlock languages={["python"]} snippets={[pymajorityElement]} />
      </SectionContainer>
    </PageContainer>
  );
}
