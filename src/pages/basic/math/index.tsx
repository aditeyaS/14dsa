import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { pyConstant, pyMaxMin, pyNTR, pyPowerAndLog, pyXPowerN } from "./code";

export default function Math() {
  return (
    <PageContainer pageTitle="Math" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Number-theoretic and representation functions</Heading>
        <CodeBlock languages={["python"]} snippets={[pyNTR]}></CodeBlock>
      </SectionContainer>

      <SectionContainer>
        <Heading>Power and log functions</Heading>
        <CodeBlock
          languages={["python"]}
          snippets={[pyPowerAndLog]}
        ></CodeBlock>
      </SectionContainer>

      <SectionContainer>
        <Heading>Dealing with max and min</Heading>
        <Paragraph>
          At times you have to set a default value to find max and min
        </Paragraph>
        <CodeBlock languages={["python"]} snippets={[pyMaxMin]}></CodeBlock>
      </SectionContainer>

      <SectionContainer>
        <Heading>Constants</Heading>
        <CodeBlock languages={["python"]} snippets={[pyConstant]}></CodeBlock>
      </SectionContainer>

      <SectionContainer>
        <Heading>Example</Heading>
        <Paragraph>x power n</Paragraph>
        <CodeBlock languages={["python"]} snippets={[pyXPowerN]}></CodeBlock>
      </SectionContainer>
    </PageContainer>
  );
}
