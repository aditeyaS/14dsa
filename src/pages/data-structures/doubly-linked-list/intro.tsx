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
    <PageSectionContainer>
      <UL>
        <LI>the next of the last node points at head</LI>
        <LI>
          Advantage: traverse in both dir, insert/delete before node,
          insert/delete form both ends in O(1) by maintaining tail
        </LI>
        <LI>Disadvantages: extra space, complex code</LI>
      </UL>
      <Section>
        <H2>Node</H2>
        <CodeBlock>{node}</CodeBlock>
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
      <Section>
        <H2>Delete last</H2>
        <CodeBlock>{dl}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};
