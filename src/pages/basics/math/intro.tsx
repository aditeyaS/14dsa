import { CodeBlock, H2 } from "../../../components";

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
    <div className="flex flex-col gap-4">
      <H2>Number-theoretic and representation functions</H2>
      <CodeBlock>{init}</CodeBlock>
      <H2>Power and log functions</H2>
      <CodeBlock>{powerAndLog}</CodeBlock>
      <H2>Dealing with max and min</H2>
      <CodeBlock>{maxMin}</CodeBlock>
      <H2>Constants</H2>
      <CodeBlock>{constant}</CodeBlock>
    </div>
  );
};
