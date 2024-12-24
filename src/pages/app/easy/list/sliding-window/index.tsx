import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  QuestionList,
  UL,
} from "@/components/blocks";
import { pymaxksum, pysubarraygivensum } from "./code";
import questions from "./question";

export default function SlidingWindow() {
  return (
    <PageContainer pageTitle="Sliding Window" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>
            problems that involve defining a window or range in the input data
            (arrays or strings) and then moving that window across the data to
            perform some operation within the window
          </LI>
          <LI>The window can be of fixed or variable length</LI>
          <LI>{`depending on the use case there are multiple ways to create window -> deque; with one variable for sum etc.`}</LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Max sum of k consecutive elements</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pymaxksum} />]}
        />
      </SectionContainer>
      <SectionContainer>
        <Heading>Subarray with given sum</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <CodeBlock language={"python"} code={pysubarraygivensum} />,
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
