import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  CodeBlock,
  Heading,
  LanguageSections,
  QuestionList,
} from "@/components/blocks";
import { pysumbwi } from "./code";
import questions from "./questions";

export default function PrePostSum() {
  return (
    <PageContainer pageTitle="Prefix/Postfix Sum" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>find sum of subarray between indexes</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pysumbwi} />
            </>,
          ]}
        />
      </SectionContainer>
      <SectionContainer>
        <Heading className="underline">Related Questions</Heading>
        <QuestionList questions={questions} />
      </SectionContainer>
    </PageContainer>
  );
}
