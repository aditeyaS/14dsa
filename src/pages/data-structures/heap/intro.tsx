import { Alert, CodeBlock } from "../../../components";

const init = `import heapq
pq = [5,20,1,30,4]

heapq.heapify(pq) #1,4,5,30,20
heapq.heappush(pq,3) #1,4,3,30,20,5
print(heapq.heappop(pq)) #3,4,5,30,20 (removes min element)

heapq.nlargest(2,pq) #[30,20]
heapq.nsmallest(2,pq) #[1,4]

heapq.pushpop(pq,2)
heapq.heapreplace(pq,-1)
`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>
          Min Heap (highest priority item assigned lowest value); root -
          smallest
        </li>
        <li>Max Heap (highest priority item assigned highest value)</li>
        <li>left(i) = 2i + 1; right(i) = 2i + 2; parent(i) = (i-1)//2</li>
      </ul>
      <h2 className="text-2xl">Usage</h2>
      <CodeBlock>{init}</CodeBlock>
      <Alert type="Important">Python implements heapq as min heap.</Alert>
      <Alert type="Tip">
        To implement max heap multiply elements by -1 before storing
      </Alert>
    </div>
  );
};
