import { Alert, CodeBlock, PageHeading } from "../../components";

const init = `arr = []
arr = list()
arr = [True]*10
arr = [x for x in range(11) if x % 2 == 0]
`;

const insert = `arr.append(40)
arr.insert(1, 15) # insert at index
`;

const access = `arr[0]
arr.index(30)
`;

const del = `arr.pop() # removes last element
arr.pop(1) # remove at index
del arr[1]
del arr[1:3]
arr.remove(20) # remove item
`;

const others = `len(arr)
if 15 in arr
`;

const listOperations = `max(arr), min(arr), sum(arr)
arr.reverse()

arr.sort() # sorts in place, ASC
arr.sort(reverse=True) # DESC

sorted(arr) # creates new list
arr.count(30) # counts the number of 30

arr[start:stop:step] # slicing; stop -> exclusive
`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <PageHeading>Initialization</PageHeading>
      <CodeBlock>{init}</CodeBlock>
      <PageHeading>Insert</PageHeading>
      <CodeBlock>{insert}</CodeBlock>
      <PageHeading>Access</PageHeading>
      <CodeBlock>{access}</CodeBlock>
      <Alert type="Caution">
        arr.index(item) gives error if item is not present
      </Alert>
      <PageHeading>Delete</PageHeading>
      <CodeBlock>{del}</CodeBlock>
      <Alert type="Caution">
        arr.remove(item) gives error if item is not present
      </Alert>
      <Alert type="Tip">
        Use another data structure if there are lot of delete
      </Alert>
      <PageHeading>Others</PageHeading>
      <CodeBlock>{others}</CodeBlock>
      <PageHeading>List operations</PageHeading>
      <CodeBlock>{listOperations}</CodeBlock>
    </div>
  );
};
