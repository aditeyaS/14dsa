import { Alert, CodeBlock, PageHeading } from "../../components";

const init = `# Tail recursive
def fun(n):
    if n <= 0:
        return
    print(n)
    fun(n-1)

# Not tail recursive
def fun(n):
    if n <= 0:
        return
    fun(n-1)
    print(n)
def fact(n):
    if n == 0:
        return 1
    return n * fact(n-1)
`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <PageHeading>Tail Recursion</PageHeading>
      <ul className="text-xl list-disc list-inside">
        <li>
          A function is tail recursive if the function does not do anything
          after the last recursive call
        </li>
        <li>
          {`Modern compilers replace tail recursion with goto -> Tail call elimination`}
        </li>
        <li>Python does not do tail call elimination</li>
      </ul>
      <Alert type="Note">Python does not do tail call elimination</Alert>
      <CodeBlock>{init}</CodeBlock>
    </div>
  );
};
