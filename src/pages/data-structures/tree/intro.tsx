import { H2, CodeBlock } from "../../../components";

const binaryTreeNode = `class Node:
    def __init__(self. k):
        self.left = None
        self.right = None
        self.val = k`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>hierarchical data structure</li>
        <li>
          Terms related to tree: root, leaf, children, parent, subtree,
          descendants, ancestors, degree (no of children), internal nodes
          (non-leaf nodes)
        </li>
        <li>
          Applications: organization structure; folder structure; XML/HTML
          content; binary search tree; binary heap; b and B+ tree
        </li>
      </ul>
      <H2>Binary Tree</H2>
      <ul className="text-xl list-disc list-inside">
        <li>at most 2 children</li>
        <li>
          node
          <CodeBlock>{binaryTreeNode}</CodeBlock>
        </li>
      </ul>
    </div>
  );
};
