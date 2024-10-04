import React from "react";
import { CodeBlock, H2, PageContainer } from "../../../../components";

const slowFast = `def getMiddle(head):
    if not head:
      return None
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow.val

# n'th node from the end
def nthNodeFromEnd(head, n):
  if not head:
    return -1
  fast = head
  for _ in range(n):
    if not fast:
      return -1
    fast = fast.next
  slow = head
  while fast:
    slow = slow.next
    fast = fast.next
  return slow.val`;

const C2Pointers: React.FC = () => {
  return (
    <PageContainer title="2 Pointers: Slow fast, cycle detection">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <H2>Slow fast</H2>
          <ul className="text-xl list-disc list-inside">
            <li>
              We take two pointers and move them at different speeds. Examples:
            </li>
          </ul>
          <CodeBlock>{slowFast}</CodeBlock>
        </div>
      </div>
    </PageContainer>
  );
};

export default C2Pointers;
