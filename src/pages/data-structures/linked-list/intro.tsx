import { CodeBlock } from "../../../components";

const llNode = `class Node:
  def __init__(self, val):
    self.val = val
    self.next = None`;
const llSearch = `def search(head, x):
  curr = head
  i = 0
  while curr:
    if curr.val == x:
      return i
    i += 1
    curr = curr.next
  return -1`;
const llIAB = `def insertAtBeginning(head, x):
  t = Node(x)
  t.next = head
  return t`;
const llIAE = `def insertAtEnd(head, x):
  if not head:
    return Node(x)
  curr = head
  while curr.next:
    curr = curr.next
  curr.next = Node(x)
  return head`;

const llIAI = `def insertAtIndex(head, x, p):
  t = Node(x)
  if p == 0:
    t.next = head 
    return t
  curr = head
  for i in range(p - 2):
    curr = curr.next
    if not curr:
      return head
  t.next = curr.next
  curr.next = t
  return head`;

const llDAB = `def delFirst(head):
  if head:
    return head.next
  return None`;

const llDAE = `def delEnd(head):
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
        <li>Nodes stored in non contiguous memory</li>
        <li>
          Applications: Round robin, places where insert/delete at beginning
          should be O(1)
        </li>
        <li>
          Node
          <CodeBlock>{llNode}</CodeBlock>
        </li>
        <li>
          Search
          <CodeBlock>{llSearch}</CodeBlock>
        </li>
        <li>
          Insert at beginning
          <CodeBlock>{llIAB}</CodeBlock>
        </li>
        <li>
          Insert at end
          <CodeBlock>{llIAE}</CodeBlock>
        </li>
        <li>
          Insert at index
          <CodeBlock>{llIAI}</CodeBlock>
        </li>
        <li>
          Delete first
          <CodeBlock>{llDAB}</CodeBlock>
        </li>
        <li>
          Delete end
          <CodeBlock>{llDAE}</CodeBlock>
        </li>
      </ul>
    </div>
  );
};
