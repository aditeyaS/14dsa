import { Alert, CodeBlock, H1, SolutionBlock } from "../../../components";

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
    return gcd(b, a % b)
`;

export const Solutions = () => {
  return (
    <div className="flex flex-col gap-4">
      <H1>Common solutions</H1>
      <SolutionBlock title="GCD and LCM of 2 numbers">
        <CodeBlock>{gcd}</CodeBlock>
        <Alert type="Tip">To find LCM: a * b = gcd * lcm</Alert>
      </SolutionBlock>
    </div>
  );
};
