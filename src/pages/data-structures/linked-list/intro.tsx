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

const search = `def search(head, x):
  curr = head
  i = 0
  while curr:
    if curr.val == x:
      return i
    i += 1
    curr = curr.next
  return -1`;

const iab = `def insertAtBeginning(head, x):
  t = Node(x)
  t.next = head
  return t`;

const iae = `def insertAtEnd(head, x):
  if not head:
    return Node(x)
  curr = head
  while curr.next:
    curr = curr.next
  curr.next = Node(x)
  return head`;

const iai = `def insertAtIndex(head, x, p):
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

const df = `def delFirst(head):
  if head:
    return head.next
  return None`;

const de = `def delEnd(head):
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
        <LI>Nodes stored in non contiguous memory</LI>
        <LI>
          Applications: Round robin, places where insert/delete at beginning
          should be O(1)
        </LI>
      </UL>
      <Section>
        <H2>Node</H2>
        <CodeBlock>{node}</CodeBlock>
      </Section>
      <Section>
        <H2>Search</H2>
        <CodeBlock>{search}</CodeBlock>
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
        <H2>Insert at index</H2>
        <CodeBlock>{iai}</CodeBlock>
      </Section>
      <Section>
        <H2>Delete first</H2>
        <CodeBlock>{df}</CodeBlock>
      </Section>
      <Section>
        <H2>Delete end</H2>
        <CodeBlock>{de}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};
