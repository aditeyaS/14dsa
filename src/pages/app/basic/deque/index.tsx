import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Alert,
  CodeBlock,
  Complexity,
  Heading,
  LanguageSections,
  LI,
  Paragraph,
  UL,
} from "@/components/blocks";

import { pyinit, pyleftOp, pyothers, pyrightOp } from "./code";
import DequeImage from "./image";

export default function Deque() {
  return (
    <PageContainer pageTitle="Deque" contributors={["aditeyaS"]}>
      <SectionContainer>
        <DequeImage />
      </SectionContainer>

      <SectionContainer>
        <UL>
          <LI>doubly ended queue</LI>
          <LI>
            insert/delete at both ends <Complexity complexity="O(1)" />
          </LI>
          <LI>Application: Stack & Queue; history of actions</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Initialization</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyinit} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Left operations</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyleftOp} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Left operations</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyrightOp} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Others</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyothers} />
              <Alert type="Caution">
                <Paragraph>Slicing is not allowed in deque</Paragraph>
              </Alert>
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
