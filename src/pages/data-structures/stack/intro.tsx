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

const llImplementation = `class Stack:
  
  def __init__(self):
    self.head = None
    self.len = 0
  
  def push(self, x):
    # insert at beginning and increment size
    
  def pop(self):
    # check empty; delete beginning and decrement size
    
  def peek(self):
    # check empty; return head value
  
  def size(self):
    # return size`;

const lifoQueue = `import queue
stack = queue.LifoQueue(maxsize=10)`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>Stack is a LIFO (last in first out) data structure</li>
        <li>Underflow: pop or peek on empty stack</li>
        <li>Overflow: push on a full stack</li>
        <li>
          Applications: recursive function calls; balanced parenthesis;
          undo/redo
        </li>
      </ul>
      <H2>List</H2>
      <CodeBlock>{listImplementation}</CodeBlock>
      <H2>Deque</H2>
      <CodeBlock>{dequeImplementation}</CodeBlock>
      <Alert type="Important">
        <CodeBlock>from collections import deque</CodeBlock>
      </Alert>
      <H2>Linked List</H2>
      <CodeBlock>{llImplementation}</CodeBlock>
      <Alert type="Tip">
        Use deque for stack; better performance (uses doubly linked list)
      </Alert>
      <Alert type="Note">
        python also has LIFO queue; but its used in multithreading
        <CodeBlock>{lifoQueue}</CodeBlock>
      </Alert>
    </div>
  );
};
