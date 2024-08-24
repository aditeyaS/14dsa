import { CodeBlock } from "../../components";

const init = `arr = []
arr = list()
arr = [True]*10
arr = [x for x in range(11) if x % 2 == 0]
`;

const insert = `arr.append(40)
arr.insert(1, 15) # insert at index
`;

const access = `arr[0]
arr.index(30) # error if not present
`;

const del = `arr.pop() # removes last element
arr.pop(1) # remove at index
del arr[1]
del arr[1:3]
arr.remove(20) # remove element, error if not present
`;

const others = `len(arr)
if 15 in arr
max(arr), min(arr), sum(arr)
arr.reverse()
arr.sort() # sorts in place, ASC
arr.sort(reverse=True) # DESC
sorted(arr) # creates new list
arr.count(30) # counts the number of 30
arr[start:stop:step] # slicing; stop -> exclusive
`;

export const Intro = () => {
  return (
    <>
      <h2 className="text-2xl">Init</h2>
      <CodeBlock>{init}</CodeBlock>
      <h2 className="text-2xl">Insert</h2>
      <CodeBlock>{insert}</CodeBlock>
      <h2 className="text-2xl">Access</h2>
      <CodeBlock>{access}</CodeBlock>
      <h2 className="text-2xl">Delete</h2>
      <CodeBlock>{del}</CodeBlock>
      <h2 className="text-2xl">Others</h2>
      <CodeBlock>{others}</CodeBlock>
    </>
  );
};
