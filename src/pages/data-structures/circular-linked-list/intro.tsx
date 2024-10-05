import {
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";

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
    <PageSectionContainer>
      <UL>
        <LI>the next of the last node points at head</LI>
        <LI>
          Advantage: whole list can be traversed from any node; implementation
          of round robin
        </LI>
      </UL>
      <Section>
        <H2>Node</H2>
        <CodeBlock>{node}</CodeBlock>
      </Section>
      <Section>
        <H2>Traversal</H2>
        <CodeBlock>{traversal}</CodeBlock>
      </Section>
      <Section>
        <H2>Insert at beginning</H2>
        <CodeBlock>{iab}</CodeBlock>
      </Section>
      <Section>
        <H2>Insert at end</H2>
        <CodeBlock>{iae}</CodeBlock>
      </Section>
      <Section>
        <H2>Delete first</H2>
        <CodeBlock>{df}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};
