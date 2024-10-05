import React from "react";
import {
  CodeBlock,
  Complexity,
  H2,
  PageSectionContainer,
  Section,
  TEXT,
} from "../../../../components";

const searchR = `def search(root, x):
  if root == None:
    return False
  elif root.val == x:
    return True
  elif root.val > x:
    return search(root.left, x)
  else:
    return search(root.right, x)`;

const searchI = `def search(root, x):
  while root:
    if root.val == x:
      return True
    root = root.left if root.val > x else root.right
  return False`;

const insertR = `def insert(root, x):
  if root == None:
    return Node(x)
  elif root.val == x:
    return root
  elif root.val > x:
    root.left = insert(root.left, x)
  else:
    root.right = insert(root.right, x)
  return root`;

const insertI = `def insert(root, x):
  if root == None:
    return Node(x)
  p = None # parent
  curr = root
  while curr:
    p = curr
    if curr.val == x:
      return root
    curr = curr.left if curr.val > x else curr.right
  if p.val > x:
    p.left = Node(x)
  else:
    p.right = Node(x)
  return root`;

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <Section>
        <H2>Search</H2>
        <TEXT>Recursive</TEXT>
        <Complexity time="O(h)" space="O(h)" />
        <CodeBlock>{searchR}</CodeBlock>
        <TEXT>Iterative</TEXT>
        <Complexity time="O(h)" space="O(1)" />
        <CodeBlock>{searchI}</CodeBlock>
      </Section>
      <Section>
        <H2>Insert</H2>
        <TEXT>Recursive</TEXT>
        <Complexity time="O(h)" space="O(h)" />
        <CodeBlock>{insertR}</CodeBlock>
        <TEXT>Iterative</TEXT>
        <Complexity time="O(h)" space="O(1)" />
        <CodeBlock>{insertI}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
