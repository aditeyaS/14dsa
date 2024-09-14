import { CodeBlock } from "../../../components";

const init = `import math

math.ceil(x)
math.floor(x)
math.gcd(*integers)
math.lcm(*integers)
`;

const powerAndLog = `math.cbrt(x)
math.exp(x) # math.e ** x
math.log(x, base) # base: optional, default -> e
math.pow(x, y)
math.sqrt(x)
`;

const maxMin = `a = float("inf")
b = float("-inf")
math.isinf(x)
`;

const constant = `math.pi
math.e
math.inf # similar to float("inf)
-math.inf
`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* <ul className="text-xl list-disc list-inside">
        <li>ordered</li>
        <li>unchangeable</li>
        <li>can have duplicates</li>
      </ul> */}
      <h2 className="text-2xl">
        Number-theoretic and representation functions
      </h2>
      <CodeBlock>{init}</CodeBlock>
      <h2 className="text-2xl">Power and log functions</h2>
      <CodeBlock>{powerAndLog}</CodeBlock>
      <h2 className="text-2xl">Dealing with max and min</h2>
      <CodeBlock>{maxMin}</CodeBlock>
      <h2 className="text-2xl">Constants</h2>
      <CodeBlock>{constant}</CodeBlock>
    </div>
  );
};
