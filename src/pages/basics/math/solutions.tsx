import {
  Alert,
  CodeBlock,
  H1,
  PageSectionContainer,
  SolutionBlock,
} from "../../../components";

const gcd = `def gcd(a, b): # Euclidean algorithm
    while a != b:
        if a > b:
            a = a - b
        else:
            b = b - a
    return a

def gcd(a, b): # Optimized
    if b == 0:
        return a
    return gcd(b, a % b)`;

const xPowerN = `def power(x, n):
  if n == 0:
    return 1
  t = power(x, n // 2)
  t = t * t
  return t if n % 2 == 0 else t * x`;

export const Solutions = () => {
  return (
    <PageSectionContainer>
      <H1>Common solutions</H1>
      <ul className="flex flex-col gap-1">
        <li>
          <SolutionBlock title="GCD and LCM of 2 numbers">
            <CodeBlock>{gcd}</CodeBlock>
            <Alert type="Tip">To find LCM: a * b = gcd * lcm</Alert>
          </SolutionBlock>
        </li>
        <li>
          <SolutionBlock title="x power n">
            <CodeBlock>{xPowerN}</CodeBlock>
          </SolutionBlock>
        </li>
      </ul>
    </PageSectionContainer>
  );
};
