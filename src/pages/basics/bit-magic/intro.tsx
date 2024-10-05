import {
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";

const shift = `x=5 # 101
x<<1 # 1010
x<<2 # 10100
x>>1 # 010
x>>3 # 000
1 << n # 2^n`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>Bitwise AND: &</LI>
        <LI>Bitwise OR: |</LI>
        <LI>Bitwise XOR : ^</LI>
        <LI>{`Left Shift: <<`}</LI>
        <LI>{`Right Shift: >>`}</LI>
        <LI>Bitwise Not: ~</LI>
      </UL>
      <Section>
        <H2>Shift operators</H2>
        <CodeBlock>{shift}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};
