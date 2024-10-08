import React from "react";
import {
  CodeBlock,
  Complexity,
  PageSectionContainer,
  Section,
  TEXT,
} from "../../../../components";

const countSetBits = `def countSetBits(n):
    res = 0
    while n:
        # un-sets the last set bit 
        n = n & (n - 1)
        res += 1
    return res`;
const isPow2 = `def isPow2(n):
    if n == 0:
        return False
    return (n & (n-1) == 0)`;

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <Section>
        <TEXT>Count the set bits</TEXT>
        <Complexity time="θ(set bits)" space="O(1)" />
        <CodeBlock>{countSetBits}</CodeBlock>
      </Section>
      <Section>
        <TEXT>is power of 2</TEXT>
        <CodeBlock>{isPow2}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
