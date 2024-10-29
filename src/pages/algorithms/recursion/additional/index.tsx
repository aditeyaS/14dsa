import React from "react";
import {
  CodeBlock,
  H2,
  PageContainer,
  Section,
  SolutionBlock,
} from "../../../../components";

const ropeCutting = `def maxCuts(l, a, b, c):
  if l == 0:
    return 0
  if l <= -1:
    return -1
  res = max(maxCuts(l-a, a, b, c),
            maxCuts(l-b, a, b, c),
            maxCuts(l-c, a, b, c))
  if res == -1:
    return -1
  return res + 1`;

const toh = `def towerOfHanoi(n, a, b, c):
  if n == 1:
    print(f'Move 1 from {a} to {c}')
  else:
    towerOfHanoi(n-1, a, c, b)
    print(f'Move {n} from {a} to {c}')
    towerOfHanoi(n-1, b, a, c)`;

const jos = `def josephus(n, k):
  if n == 1:
    return 0
  else:
    return (josephus(n-1, k) + k) % n`;

const RecursionAdditional: React.FC = () => {
  return (
    <PageContainer title="Recursion Additional">
      <Section>
        <H2>Rope cutting</H2>
        <SolutionBlock title="Max number of pieces of rope (length in subset)">
          <CodeBlock>{ropeCutting}</CodeBlock>
        </SolutionBlock>
      </Section>
      <Section>
        <H2>Tower of Hanoi</H2>
        <SolutionBlock title="Tower of hanoi">
          <CodeBlock>{toh}</CodeBlock>
        </SolutionBlock>
      </Section>
      <Section>
        <H2>Josephus Problem</H2>
        <SolutionBlock title="kill kth person, find survivor">
          <CodeBlock>{jos}</CodeBlock>
        </SolutionBlock>
      </Section>
    </PageContainer>
  );
};

export default RecursionAdditional;
