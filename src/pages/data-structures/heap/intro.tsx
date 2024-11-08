import { useEffect, useState } from "react";
import {
  Alert,
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";
import ApiClient from "../../../lib/api-client";

const heapq = `import heapq

pq = [5, 20, 1, 30, 4]

heapq.heapify(pq)  # 1,4,5,30,20
heapq.heappush(pq, 3)  # 1,4,3,30,20,5
m = heapq.heappop(pq)  # 3,4,5,30,20 (removes min element)

heapq.nlargest(2, pq)  # [30,20]
heapq.nsmallest(2, pq)  # [1,4]

heapq.pushpop(pq, 2)
heapq.heapreplace(pq, -1)`;

export const Intro = () => {
  const apiClient = new ApiClient();
  const [minHeap, setMinHeap] = useState<string>("");

  useEffect(() => {
    fetchMinHeap();
  }, []);

  const fetchMinHeap = async () => {
    try {
      const data = await apiClient.getCode("data-structures/heap/min_heap.py");
      setMinHeap(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

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
        <CodeBlock>{minHeap}</CodeBlock>
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
