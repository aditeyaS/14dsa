import { Alert, CodeBlock, PageHeading } from "../../components";

const listImplementation = `q = []
q.append(10) # enqueue
q.pop(0) # dequeue
len(q) # length
`;

const dequeImplementation = `from collections import deque
q = deque()
q.append(10) # enqueue
q.popleft() # dequeue
len(q) # length
`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl">Queue is a FIFO data structure</span>
      <PageHeading>Implementation with List</PageHeading>
      <CodeBlock>{listImplementation}</CodeBlock>
      <PageHeading>Implementation with Deque</PageHeading>
      <CodeBlock>{dequeImplementation}</CodeBlock>
      <Alert type="Important">
        <CodeBlock>from collections import deque</CodeBlock>
      </Alert>
      <Alert type="Tip">Use deque for queue</Alert>
    </div>
  );
};
