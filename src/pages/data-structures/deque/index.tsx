import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { Alert } from "@/components/alert";
import { pyinit, pyleftOp, pyothers, pyrightOp } from "./code";

export default function Deque() {
  return (
    <PageContainer pageTitle="Deque" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>doubly ended queue</LI>
          <LI>insert/delete at both ends - O(1)</LI>
          <LI>Application: Stack & Queue; history of actions</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Initialization</Heading>
        <CodeBlock languages={["python"]} snippets={[pyinit]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Left operations</Heading>
        <CodeBlock languages={["python"]} snippets={[pyleftOp]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Left operations</Heading>
        <CodeBlock languages={["python"]} snippets={[pyrightOp]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Others</Heading>
        <CodeBlock languages={["python"]} snippets={[pyothers]} />
      </SectionContainer>

      <SectionContainer>
        <Alert type="Caution">
          <Paragraph>Slicing is not allowed in deque</Paragraph>
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
