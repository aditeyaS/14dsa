import {
  CodeBlock,
  H1,
  PageSectionContainer,
  SolutionBlock,
} from "../../../components";

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
    <PageSectionContainer>
      <H1>Common solutions</H1>
      <ul className="flex flex-col gap-1">
        <li>
          <SolutionBlock title="x power n">
            <CodeBlock>{xPowerN}</CodeBlock>
          </SolutionBlock>
        </li>
      </ul>
    </PageSectionContainer>
  );
};
