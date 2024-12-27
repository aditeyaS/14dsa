import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Heading2,
  OL,
  LanguageSections,
  CodeBlock,
  PseudoCode,
  Paragraph2,
  Paragraph,
  Alert,
} from "@/components/blocks";
import { pym, pyq, pyt } from "./code";

export default function Introduction() {
  return (
    <PageContainer pageTitle="Introduction" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>It is an optimization over plain recursion</LI>
          <LI>
            The idea is to reuse the solution of subproblem when they are
            overlapping
          </LI>
          <LI>
            2 ways to implement:
            <OL className="ml-8">
              <LI>Memoization (Top Down)</LI>
              <LI>Tabulation (Bottom Up)</LI>
            </OL>
          </LI>
          <LI>Applications: Bellman Ford Algo, Floyd Warshall Algo</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <PseudoCode text="Example" code={pyq} lineNumbers />
        <Paragraph2>Suppose we call fibonacci(5)</Paragraph2>
        <Paragraph2>At line 4: fibonacci(4) + fibonacci(3)</Paragraph2>
        <Paragraph2>fibonacci(4) will again call for fibonacci(3)</Paragraph2>
        <Paragraph2>
          Hence we will have to calculate fibonacci(3) twice
        </Paragraph2>
      </SectionContainer>

      <SectionContainer>
        <Heading2>Memoization</Heading2>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pym} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading2>Tabulation</Heading2>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyt} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Paragraph>
          If one variable is changing the dp should be 1D, if 2 then 2D
        </Paragraph>
        <Alert type={"Tip"}>You can use defaultdict instead of array</Alert>
      </SectionContainer>
    </PageContainer>
  );
}
