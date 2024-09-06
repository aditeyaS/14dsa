import { CodeBlock, PageHeading } from "../../components";

const init = `class Node:
    def __init__(self, val):
        self.val = val
        self.next = None`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>Nodes stored in non contiguous memory</li>
      </ul>
      <PageHeading>Node</PageHeading>
      <CodeBlock>{init}</CodeBlock>
      <PageHeading>Other types of LL:</PageHeading>
      <ul className="text-xl list-disc list-inside">
        <li>Doubly Ended Queue</li>
        <li>Circular Queue</li>
      </ul>
    </div>
  );
};
