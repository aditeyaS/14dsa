import { CodeBlock } from "../../../components";

const node = `class Node:
  def __init__(self, val):
    self.val = val
    self.next = None`;

const traversal = `def traversal(head):
    if not head:
        return
    print(head.val)
    curr = head.next
    while curr != head:
        print(curr.val)
        curr = curr.next`;

const iab = `# insert at 2nd position then swap
def insertAtBeginning(head, x):
    t = Node(x)
    if not head:
        t.next = t
        return t
    t.next = head.next
    head.next = t
    head.val, t.val = t.val, head.val
    return head`;

const iae = `# insert at 2nd position, swap, then return 2nd
def insertAtEnd(head, x):
    t = Node(x)
    if not head:
        t.next = t
        return t
    t.next = head.next
    head.next = t
    t.val, head.val = head.val, t.val
    return t`;

const df = `def delFirst(head):
    if head == None or head.next == head:
        return None
    head.val = head.next.val
    head.next = head.next.next
    return head`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>the next of the last node points at head</li>
        <li>
          Advantage: whole list can be traversed from any node; implementation
          of round robin
        </li>
        <li>
          Node
          <CodeBlock>{node}</CodeBlock>
        </li>
        <li>
          Traversal
          <CodeBlock>{traversal}</CodeBlock>
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
      </ul>
    </div>
  );
};
