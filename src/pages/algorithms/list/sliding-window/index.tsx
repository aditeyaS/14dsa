import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pymaxksum, pysubarraygivensum } from "./code";

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
          <LI>{`depending on the use case there are multiple ways to create window -> d = deque(); with one variable for sum etc.`}</LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Max sum of k consecutive elements</Heading>
        <CodeBlock languages={["python"]} snippets={[pymaxksum]} />
      </SectionContainer>
      <SectionContainer>
        <Heading>Subarray with given sum</Heading>
        <CodeBlock languages={["python"]} snippets={[pysubarraygivensum]} />
      </SectionContainer>
    </PageContainer>
  );
}
