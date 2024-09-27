import { CodeBlock, H1, SolutionBlock } from "../../../components";

const xPowerN = `def power(x, n):
    res = 1
    while n > 0:
        if n % 2 != 0:
            res *= x
        x *= x
        n //= 2
    return res`;

export const Solutions = () => {
  return (
    <div className="flex flex-col gap-4">
      <H1>Common solutions</H1>
      <ul className="flex flex-col gap-1">
        <li>
          <SolutionBlock title="x power n">
            <CodeBlock>{xPowerN}</CodeBlock>
          </SolutionBlock>
        </li>
      </ul>
    </div>
  );
};
