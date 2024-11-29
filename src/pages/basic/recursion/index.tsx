import { Alert } from "@/components/alert";
import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pyRecursion } from "./code";

export default function Recursion() {
  return (
    <PageContainer pageTitle="Recursion" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>{`function that calls itself`}</LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Tail Recursion</Heading>
        <UL>
          <LI>
            A function is tail recursive if the function does not do anything
            after the last recursive call
          </LI>
          <LI>{`Modern compilers replace tail recursion with goto -> Tail call elimination`}</LI>
        </UL>
      </SectionContainer>
      <Alert type="Note">
        <Paragraph>Python does not do tail call elimination</Paragraph>
      </Alert>
      <SectionContainer>
        <CodeBlock languages={["python"]} snippets={[pyRecursion]} />
      </SectionContainer>
    </PageContainer>
  );
}
