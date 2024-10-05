import {
  Alert,
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";

const init = `import heapq
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
      <UL>
        <LI>
          Min Heap (highest priority item assigned lowest value); root -
          smallest
        </LI>
        <LI>Max Heap (highest priority item assigned highest value)</LI>
        <LI>left(i) = 2i + 1; right(i) = 2i + 2; parent(i) = (i-1)//2</LI>
      </UL>
      <Section>
        <H2>Usage</H2>
        <CodeBlock>{init}</CodeBlock>
      </Section>
      <Alert type="Important">Python implements heapq as min heap.</Alert>
      <Alert type="Tip">
        To implement max heap multiply elements by -1 before storing
      </Alert>
    </PageSectionContainer>
  );
};
