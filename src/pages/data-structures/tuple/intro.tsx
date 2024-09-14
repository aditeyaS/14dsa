import { Alert, CodeBlock } from "../../../components";

const init = `t = ("apple", 2, True)

t = tuple(("apple", 2, True))

t = tuple([])
`;

const access = `t[0] # apple
`;

const others = `len(t)
`;

const important = `t1 = ("apple",)
print(type(t1)) # <class 'tuple'>

t2 = ("apple")
print(type(t2)) # <class 'str'>
`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>ordered</li>
        <li>unchangeable</li>
        <li>can have duplicates</li>
      </ul>
      <h2 className="text-2xl">Init</h2>
      <CodeBlock>{init}</CodeBlock>
      <h2 className="text-2xl">Access</h2>
      <CodeBlock>{access}</CodeBlock>
      <h2 className="text-2xl">Others</h2>
      <CodeBlock>{others}</CodeBlock>
      <Alert type="Important">
        <CodeBlock>{important}</CodeBlock>
      </Alert>
    </div>
  );
};
