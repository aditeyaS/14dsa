export const pylistImplementation = `q = []
q.append(10) # enqueue
q.pop(0) # dequeue -> O(n) Inefficient ❌
len(q) # length`;

export const pydequeImplementation = `from collections import deque
q = deque()
q.append(10) # enqueue
q.popleft() # dequeue
len(q) # length`;

export const pyllImplementation = `class Queue:
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

export const pycircularListImplementation = `class Queue:
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
