import React from "react";
import { CodeBlock, H2 } from "../../../../components";

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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <H2>Search</H2>
        <span>Recursive</span>
        <span>Time: O(h) | Space: O(h)</span>
        <CodeBlock>{searchR}</CodeBlock>
        <span>Iterative</span>
        <span>Time: O(h) | Space: O(1)</span>
        <CodeBlock>{searchI}</CodeBlock>
      </div>
      <div className="flex flex-col gap-1">
        <H2>Insert</H2>
        <span>Recursive</span>
        <span>Time: O(h) | Space: O(h)</span>
        <CodeBlock>{insertR}</CodeBlock>
        <span>Iterative</span>
        <span>Time: O(h) | Space: O(1)</span>
        <CodeBlock>{insertI}</CodeBlock>
      </div>
    </div>
  );
};

export default Intro;
