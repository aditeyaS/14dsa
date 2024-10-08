import React from "react";
import {
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../../components";

const slidingWindow = `d = deque()
`;

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <Section>
        <H2>Sliding window</H2>
        <UL>
          <LI>Used for searching in sorted array</LI>
        </UL>
        <CodeBlock>{slidingWindow}</CodeBlock>
      </Section>
      <Section>
        <H2>2 pointer</H2>
        <UL>
          <LI>Used for searching in sorted array</LI>
        </UL>
        <CodeBlock>{slidingWindow}</CodeBlock>
      </Section>
      <Section>
        <H2>Prefix sum</H2>
        <UL>
          <LI>Used for searching in sorted array</LI>
        </UL>
        <CodeBlock>{slidingWindow}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
