import {
  CodeBlock,
  H2,
  PageSectionContainer,
  Section,
} from "../../../components";

const init = `import math
math.ceil(x)
math.floor(x)
math.gcd(*integers) # GCD or HCF
math.lcm(*integers)`;

const powerAndLog = `math.cbrt(x)
math.exp(x) # math.e ** x
math.log(x, base) # base: optional, default -> e
math.pow(x, y)
math.sqrt(x)`;

const maxMin = `a = float("inf")
b = float("-inf")
math.isinf(x)`;

const constant = `math.pi
math.e
math.inf # similar to float("inf)
-math.inf`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <Section>
        <H2>Number-theoretic and representation functions</H2>
        <CodeBlock>{init}</CodeBlock>
      </Section>
      <Section>
        <H2>Power and log functions</H2>
        <CodeBlock>{powerAndLog}</CodeBlock>
      </Section>
      <Section>
        <H2>Dealing with max and min</H2>
        <CodeBlock>{maxMin}</CodeBlock>
      </Section>
      <Section>
        <H2>Constants</H2>
        <CodeBlock>{constant}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};
