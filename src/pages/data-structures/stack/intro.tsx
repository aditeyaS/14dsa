import { Alert, CodeBlock, H2 } from "../../../components";

const listImplementation = `s = []
s.append(10) # push
s.pop() # pop
s[-1] # peek
len(s) # size`;

const dequeImplementation = `from collections import deque
s = deque()
s.append(10) # push
s.pop() # pop
s[-1] # peek
len(s) # size`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>Stack is a LIFO data structure</li>
      </ul>
      <H2>Implementation with List</H2>
      <CodeBlock>{listImplementation}</CodeBlock>
      <H2>Implementation with Deque</H2>
      <CodeBlock>{dequeImplementation}</CodeBlock>
      <Alert type="Important">
        <CodeBlock>from collections import deque</CodeBlock>
      </Alert>
      <Alert type="Tip">Use deque for stack</Alert>
    </div>
  );
};
