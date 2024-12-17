import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Heading,
  Paragraph,
  LanguageSections,
  CodeBlock,
} from "@/components/blocks";
import { pymajorityElement } from "./code";

export default function Additional() {
  return (
    <PageContainer pageTitle="Additional" contributors={["aditeyaS"]}>
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
