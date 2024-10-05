import {
  Alert,
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";

const init = `from collections import deque
d = deque()`;

const leftOp = `d.appendleft(10)
d.popleft()`;

const rightOp = `d.append(20)
d.pop()`;

const others = `d.insert(2, 15) # index, value
d.count(10)
d.extend([30,40])

# first 15 then 25 will be added
# new deque -> [25, 15, ...]
d.extendleft([15,25])

d.rotate(2) # clockwise

d.reverse()

d[0] = 5
d[-1]`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>doubly ended queue</LI>
        <LI>insert/delete at both ends - O(1)</LI>
        <LI>Application: Stack & Queue; history of actions</LI>
      </UL>
      <Section>
        <H2>Initialization</H2>
        <CodeBlock>{init}</CodeBlock>
      </Section>
      <Section>
        <H2>Left operations</H2>
        <CodeBlock>{leftOp}</CodeBlock>
      </Section>
      <Section>
        <H2>Right operations</H2>
        <CodeBlock>{rightOp}</CodeBlock>
      </Section>
      <Section>
        <H2>Others</H2>
        <CodeBlock>{others}</CodeBlock>
      </Section>
      <Alert type="Caution">Slicing is not allowed in deque</Alert>
    </PageSectionContainer>
  );
};
