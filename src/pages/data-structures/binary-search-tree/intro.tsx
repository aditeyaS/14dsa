import {
  CodeBlock,
  Complexity,
  H2,
  LI,
  PageSectionContainer,
  Section,
  TEXT,
  UL,
} from "../../../components";

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

const deleteR = `def delete(root, x):
  if root == None:
    return
  if root.val > x:
    root.left = delete(root.left, x)
  elif root.val < x:
    root.right = delete(root.right, x)
  else:
    if root.left == None:
      return root.right
    elif root.right == None:
      return root.left
    else:
      succ = getSuccessor(root.right, x)
      root.val = succ
      root.right = delete(root.right, succ)
  return root
  
def getSuccessor(root, x):
  while root.left:
    root = root.left
  return root.val`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>{`left.val < right.val`}</LI>
        <LI>all keys are typically distinct</LI>
        <LI>search, insert, delete - O(log n)</LI>
        <LI>find closest - O(log n)</LI>
        <LI>sorted traversal - O(n)</LI>
        <LI>
          Applications: maintain sorted stream of data; implement doubly ended
          priority queue
        </LI>
      </UL>
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
      <Section>
        <H2>Delete</H2>
        <TEXT>Recursive</TEXT>
        <Complexity time="O(h)" space="O(h)" />
        <CodeBlock>{deleteR}</CodeBlock>
      </Section>
      <Section>
        <H2>AVL Tree</H2>
        <UL>
          <LI>Self balancing BST</LI>
          <LI>
            {
              "For every node difference between left and right height does not exceed 1; balance factor <= 1"
            }
          </LI>
          <LI>balance factor = abs(left height - right height)</LI>
        </UL>
      </Section>
      <Section>
        <H2>Red Black Tree</H2>
        <UL>
          <LI>Every node is either Red or Black</LI>
          <LI>root is Black</LI>
          <LI>No 2 consecutive Red</LI>
          <LI>
            number of Black nodes from every node to all of it's descendant
            leaves should be same
          </LI>
        </UL>
      </Section>
    </PageSectionContainer>
  );
};
