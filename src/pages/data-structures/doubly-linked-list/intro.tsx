import { CodeBlock } from "../../../components";

const node = `class Node:
    def __init__(self, val):
        self.val = val
        self.prev = None
        self.next = None`;

const iab = `def insertAtBeginning(head, x):
    t = Node(x)
    if head:
        head.prev = t
    t.next = head
    return t`;

const iae = `def insertAtEnd(head, x):
    t = Node(x)
    if not head:
        return t
    curr = head
    while curr.next:
        curr = curr.next
    curr.next = t
    t.prev = curr
    return head`;

const df = `def delFirst(head):
    if head == None or head.next == None:
        return None
    head = head.next
    head.prev = None
    return head`;

const dl = `def delLast(head):
    if head == None or head.next == None:
        return None
    curr = head
    while curr.next.next:
        curr = curr.next
    curr.next = None
    return head`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>the next of the last node points at head</li>
        <li>
          Advantage: traverse in both dir, insert/delete before node,
          insert/delete form both ends in O(1) by maintaining tail
        </li>
        <li>Disadvantages: extra space, complex code</li>
        <li>
          Node
          <CodeBlock>{node}</CodeBlock>
        </li>
        <li>
          Insert at beginning
          <CodeBlock>{iab}</CodeBlock>
        </li>
        <li>
          Insert at end
          <CodeBlock>{iae}</CodeBlock>
        </li>
        <li>
          Delete first
          <CodeBlock>{df}</CodeBlock>
        </li>
        <li>
          Delete last
          <CodeBlock>{dl}</CodeBlock>
        </li>
      </ul>
    </div>
  );
};
