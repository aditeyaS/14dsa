import {
  Alert,
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";

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
    # check empty; return head value`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>LIFO (last in first out) data structure</LI>
        <LI>Underflow: pop or peek on empty stack</LI>
        <LI>Overflow: push on a full stack</LI>
        <LI>
          Applications: recursive function calls; balanced parenthesis;
          undo/redo
        </LI>
      </UL>
      <Section>
        <H2>List implementation</H2>
        <CodeBlock>{listImplementation}</CodeBlock>
      </Section>
      <Section>
        <H2>Deque implementation</H2>
        <CodeBlock>{dequeImplementation}</CodeBlock>
      </Section>
      <Section>
        <Alert type="Important">
          <CodeBlock>from collections import deque</CodeBlock>
        </Alert>
        <Alert type="Tip">
          Use deque for stack; better performance (uses doubly linked list)
        </Alert>
      </Section>
      <Alert type="Note">
        python also has LIFO queue; but its used in multithreading
        <CodeBlock>from queue import LifoQueue</CodeBlock>
      </Alert>
      <Section>
        <H2>Linked List implementation</H2>
        <CodeBlock>{llImplementation}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};
