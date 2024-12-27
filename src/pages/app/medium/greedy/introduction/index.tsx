import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Paragraph,
  Heading2,
  LanguageSections,
  CodeBlock,
  PseudoCode,
  Heading,
  Alert,
} from "@/components/blocks";
import { pseudo, pyexample } from "./code";

export default function Greedy() {
  return (
    <PageContainer pageTitle="Introduction" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Mainly used for optimization problems</LI>
          <LI>We try to be greedy and pick up the max or min</LI>
          <LI>
            Applications:
            <UL className="ml-8">
              <LI>
                Finding optimal solution - activity selection, fractional
                knapsack, prim's algo etc
              </LI>
              <LI>
                Finding close to optimal solution for NP Hard problem like
                traveling salesman problem
              </LI>
            </UL>
          </LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading2 className="underline">Example</Heading2>
        <div>
          <Paragraph>
            Consider infinite supply of following value coins
          </Paragraph>
          <Paragraph>10, 5, 2, 1</Paragraph>
          <Paragraph>
            If someone asks for an amount how will you give the amount using
            minimum coins?
          </Paragraph>
        </div>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyexample} />]}
        />
        <Alert type={"Caution"}>
          It may not work always. Suppose in the example, coins=[18,1,10] and
          amount=20; Greedy=3 (18x1 + 1x2), but correct=2 (10x2)
        </Alert>
      </SectionContainer>
      <SectionContainer>
        <Heading>General structure</Heading>
        <PseudoCode code={pseudo} text="" />
      </SectionContainer>
    </PageContainer>
  );
}
