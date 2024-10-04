import { Alert, CodeBlock, H2 } from "../../../components";

const listImplementation = `q = []
q.append(10) # enqueue
q.pop(0) # dequeue O(n)
len(q) # length`;

const dequeImplementation = `from collections import deque
q = deque()
q.append(10) # enqueue
q.popleft() # dequeue
len(q) # length`;

const llImplementation = `class Queue:
  def __init__(self):
    self.f = None # front -> head
    self.r = None # rear -> tail
    self.len = 0
  
  def enque(self, x):
    t = Node(x)
    if self.r:
      self.r.next = t
    else:
      self.f = t
    self.r = t
    self.len += 1
  
  def deque(self):
    if not self.f:
      return None
    res = self.f.val
    self.f = self.f.next
    if self.f == None:
      self.r = None
    self.len -= 1
    return res`;

const circularListImplementation = `class Queue:
  def __init__(self, capacity):
    self.l = [None] * capacity
    self.capacity = capacity
    self.len = 0
    self.f = 0 # front
  
  def enque(self, x):
    if self.len == self.capacity:
      return None
    r = (self.f + self.len - 1) % self.capacity
    r = (r + 1) % self.capacity
    self.l[rear] = x
    self.len += 1

  def deque(self):
    if self.size == 0:
      return None
    res = self.l[self.f]
    self.f = (self.f + 1) % self.capacity
    self.len -= 1
    return res
    
  def getFront(self):
    return None if self.len == 0 else self.l[self.f]
    
  def getRear(self):
    r = (self.f + self.len - 1) % self.capacity
    return None if self.len == 0 else self.l[r]`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>FIFO (first in first out) data structure</li>
        <li>
          Applications: single resource multiple consumers; sync slow fast
          devices; OS - semaphores, FCFS scheduling
        </li>
        <li>Variation: dequq, priority queue, doubly ended priority queue</li>
      </ul>
      <H2>List implementation</H2>
      <CodeBlock>{listImplementation}</CodeBlock>
      <H2>Deque implementation</H2>
      <CodeBlock>{dequeImplementation}</CodeBlock>
      <Alert type="Important">
        <CodeBlock>from collections import deque</CodeBlock>
      </Alert>
      <H2>Linked List implementation</H2>
      <CodeBlock>{llImplementation}</CodeBlock>
      <Alert type="Tip">Use deque for queue</Alert>
      <Alert type="Note">
        python also has Queue; but its used in multithreading
        <CodeBlock>from queue import Queue</CodeBlock>
      </Alert>
      <div className="flex flex-col">
        <span className="text-xl">Implement queue using circular list</span>
        <CodeBlock>{circularListImplementation}</CodeBlock>
      </div>
    </div>
  );
};
