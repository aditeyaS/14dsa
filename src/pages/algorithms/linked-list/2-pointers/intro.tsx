import React from "react";
import {
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../../components";

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

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <Section>
        <H2>Slow fast</H2>
        <UL>
          <LI>
            We take two pointers and move them at different speeds. Examples:
          </LI>
        </UL>
        <CodeBlock>{slowFast}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
