import { CodeBlock } from "../../components";

const listImplementation = `s = []
s.append(10) # push
s.pop() # pop
s[-1] # peek
len(s) # size
`;

const dequeImplementation = `from collections import deque
s = deque()
s.append(10) # push
s.pop() # pop
s[-1] # peek
len(s) # size
`;

export const Intro = () => {
  return (
    <>
      <h2 className="text-2xl">Implementation with List</h2>
      <CodeBlock>{listImplementation}</CodeBlock>
      <h2 className="text-2xl">Implementation with Deque</h2>
      <CodeBlock>{dequeImplementation}</CodeBlock>
    </>
  );
};
