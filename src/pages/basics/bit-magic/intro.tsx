import {
  Alert,
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  TABLE,
  TD,
  TH,
  TR,
  UL,
} from "../../../components";

const shift = `x=5 # 101
x<<2 # 10100
x>>3 # 000

x << n # x * 2^n
1 << n # 2^n`;

const binConversion = `print(bin(18)) # 0b10010
print(int("0b0010", 2)) # 18`;

const bitMatrix = [
  ["A", "B", "&", "|", "^"],
  ["0", "0", "0", "0", "0"],
  ["0", "1", "0", "1", "1"],
  ["1", "0", "0", "1", "1"],
  ["1", "1", "1", "1", "0"],
];

const bitwiseNot = `x = 5 # 0...0101
print(~x) # -6 # 1...1010`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <Section>
        <UL>
          <LI>
            negative numbers are represented in 2's complement in most languages
          </LI>
          <LI>
            Range: [-2 <sup>n-1</sup> to 2 <sup>n-1</sup> - 1]; n - number of
            bits
          </LI>
          <LI>
            Range for unsigned: 0 to 2 <sup>n</sup> - 1
          </LI>
          <LI>2's complement - 1. invert all bits; 2. add 1</LI>
        </UL>
        <Alert type="Important">leading bit is 1 for negative numbers</Alert>
      </Section>
      <Section>
        <H2>Bitwise Operators</H2>
        <UL>
          <LI>Bitwise AND: &</LI>
          <LI>Bitwise OR: |</LI>
          <LI>Bitwise XOR : ^</LI>
        </UL>
        <TABLE>
          {bitMatrix.map((bit, index) => {
            if (index == 0) {
              return (
                <TR key={`row-${index}`}>
                  {bit.map((val, bitIndex) => (
                    <TH key={`row-${index}-cell-${bitIndex}`}>{val}</TH>
                  ))}
                </TR>
              );
            } else {
              return (
                <TR key={`row-${index}`}>
                  {bit.map((val, bitIndex) => (
                    <TD key={`row-${index}-cell-${bitIndex}`}>{val}</TD>
                  ))}
                </TR>
              );
            }
          })}
        </TABLE>
        <UL>
          <LI>Bitwise Not: ~</LI>
        </UL>
        <CodeBlock>{bitwiseNot}</CodeBlock>
      </Section>
      <Section>
        <H2>Shift operators</H2>
        <UL>
          <LI>{`Left Shift: <<`}</LI>
          <LI>{`Right Shift: >>`}</LI>
        </UL>
        <CodeBlock>{shift}</CodeBlock>
      </Section>
      <Section>
        <CodeBlock>{binConversion}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};
