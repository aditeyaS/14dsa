export const pylistImplementation = `s = []
s.append(10) # push
s.pop() # pop
s[-1] # peek
len(s) # size`;

export const pydequeImplementation = `from collections import deque
s = deque()
s.append(10) # push
s.pop() # pop
s[-1] # peek
len(s) # size`;

export const pyllImplementation = `class Stack:
  
  def __init__(self):
    self.head = None
    self.len = 0
  
  def push(self, x):
    # insert at beginning and increment size
    
  def pop(self):
    # check empty; delete beginning and decrement size
    
  def peek(self):
    # check empty; return head value`;
