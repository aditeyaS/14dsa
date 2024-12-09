import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Alert,
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  Paragraph,
  UL,
} from "@/components/blocks";
import { pyRecursion } from "./code";

export default function Recursion() {
  return (
    <PageContainer pageTitle="Recursion" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>{`function that calls itself`}</LI>
          <LI>
            Applications: Dynamic Programming, Backtracking, Divide and Conquer
          </LI>
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

      <SectionContainer>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyRecursion} />
              <Alert type="Note">
                <Paragraph>Python does not do tail call elimination</Paragraph>
              </Alert>
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
