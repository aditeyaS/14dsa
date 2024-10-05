import {
  H2,
  CodeBlock,
  PageSectionContainer,
  UL,
  LI,
  Section,
} from "../../../components";

const binaryTreeNode = `class Node:
    def __init__(self. k):
        self.left = None
        self.right = None
        self.val = k`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>hierarchical data structure</LI>
        <LI>
          Terms related to tree: root, leaf, children, parent, subtree,
          descendants, ancestors, degree (no of children), internal nodes
          (non-leaf nodes)
        </LI>
        <LI>
          Applications: organization structure; folder structure; XML/HTML
          content; binary search tree; binary heap; b and B+ tree
        </LI>
      </UL>
      <Section>
        <H2>Binary Tree</H2>
        <UL>
          <LI>at most 2 children</LI>
          <LI>
            node
            <CodeBlock>{binaryTreeNode}</CodeBlock>
          </LI>
        </UL>
      </Section>
    </PageSectionContainer>
  );
};
