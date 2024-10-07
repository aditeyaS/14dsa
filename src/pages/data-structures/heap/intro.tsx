import {
  Alert,
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";

const implementation = `class MinHeap:
  def __init__(self):
    self.mh = []
  
  def __init__(self, l):
    self.mh = l
    i = (len(l) - 2) // 2
    while i >= 0:
      self.minHeapify(i)
      i -= 1
    
  def parent(self, i):
    return (i - 1)//2
  
  def left(self, i):
    return (2 * i + 1)
  
  def right(self, i):
    return (2 * i + 2)
  
  def insert(self, x):
    self.mh.append(x)
    i = len(self.mh) - 1
    while i > 0 and self.mh[self.parent(i)] > self.mh[i]:
      p = self.parent(i)
      self.mh[i], self.mh[p] = self.mh[p], self.mh[i]
      i = p

  def minHeapify(self, i):
    l = self.left(i)
    r = self.right(i)
    smallest = i
    n = len(self.mh)
    if l < n and self.mh[l] < self.mh[smallest]:
      smallest = l
    if r < n and self.mh[r] < self.mh[smallest]:
      smallest = r
    if smallest != i:
      self.mh[smallest], self.mh[i] = self.mh[i], self.mh[smallest]
      self.minHeapify(smallest)
      
  def extractMin(self):
    n = len(self.mh)
    if n == 0:
      return math.inf
    res = self.mh[0]
    self.mh[0] = self.mh[n - 1]
    self.mh.pop()
    self.minHeapify(0)
    return res
    
  def decreaseKey(self, i, x):
    self.mh[i] = x
    while i != 0 and self.mh[self.parent(i)] > self.mh[i]:
      p = self.parent(i)
      self.mh[i], self.mh[p] = self.mh[p], self.mh[i]
      i = p
  
  def deleteKey(self, i):
    n = len(self.mh)
    if i >= n:
      return
    self.decreaseKey(i, -math.inf)
    self.extractMin()`;

const heapq = `import heapq
pq = [5,20,1,30,4]

heapq.heapify(pq) #1,4,5,30,20
heapq.heappush(pq,3) #1,4,3,30,20,5
print(heapq.heappop(pq)) #3,4,5,30,20 (removes min element)

heapq.nlargest(2,pq) #[30,20]
heapq.nsmallest(2,pq) #[1,4]

heapq.pushpop(pq,2)
heapq.heapreplace(pq,-1)`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <Section>
        <H2>Binary Heap</H2>
        <UL>
          <LI>used in HeapSort</LI>
          <LI>it is a complete binary tree</LI>
          <LI>used to implement Priority Queue</LI>
          <LI>2 types: Min heap; Max heap</LI>
          <LI>Min Heap (highest priority item assigned lowest value)</LI>
          <LI>Max Heap (highest priority item assigned highest value)</LI>
        </UL>
      </Section>
      <Section>
        <H2>Min Heap</H2>
        <UL>
          <LI>complete binary tree</LI>
          <LI>every node has value smaller than it's descendants</LI>
          <LI>
            Array implementation: left(i) = 2i + 1; right(i) = 2i + 2; parent(i)
            = (i-1)//2
          </LI>
        </UL>
        <CodeBlock>{implementation}</CodeBlock>
      </Section>
      <Section>
        <H2>heapq in Python</H2>
        <CodeBlock>{heapq}</CodeBlock>
        <Alert type="Important">Python implements heapq as min heap.</Alert>
        <Alert type="Tip">
          To implement max heap multiply elements by -1 before storing
        </Alert>
      </Section>
    </PageSectionContainer>
  );
};
