import { Alert, CodeBlock, H2 } from "../../../components";

const listImplementation = `q = []
q.append(10) # enqueue
q.pop(0) # dequeue
len(q) # length`;

const dequeImplementation = `from collections import deque
q = deque()
q.append(10) # enqueue
q.popleft() # dequeue
len(q) # length`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl">Queue is a FIFO data structure</span>
      <H2>Implementation with List</H2>
      <CodeBlock>{listImplementation}</CodeBlock>
      <H2>Implementation with Deque</H2>
      <CodeBlock>{dequeImplementation}</CodeBlock>
      <Alert type="Important">
        <CodeBlock>from collections import deque</CodeBlock>
      </Alert>
      <Alert type="Tip">Use deque for queue</Alert>
    </div>
  );
};
