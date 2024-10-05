import React from "react";
import {
  Alert,
  CodeBlock,
  Complexity,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../../components";

const inOrder = `def inOrder(root):
    if not root:
        inOrder(root.left)
        print(root.val)
        inOrder(root.right)`;

const preOrder = `def preOrder(root):
    if not root:
        print(root.val)
        preOrder(root.left)
        preOrder(root.right)`;

const postOrder = `def postOrder(root):
    if not root:
        postOrder(root.left)
        postOrder(root.right)
        print(root.val)`;

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>{`in-order: left -> root (parent P) -> right`}</LI>
        <LI>{`pre-order: root -> left -> right`}</LI>
        <LI>{`post-order: left -> right -> root`}</LI>
      </UL>
      <Section>
        <H2>In-order (LPR)</H2>
        <Complexity time="θ(n)" space="θ(h)" />
        <CodeBlock>{inOrder}</CodeBlock>
      </Section>
      <Section>
        <H2>Pre-order (PLR)</H2>
        <Complexity time="θ(n)" space="θ(h)" />
        <CodeBlock>{preOrder}</CodeBlock>
      </Section>
      <Section>
        <H2>Post-order (LRP)</H2>
        <Complexity time="θ(n)" space="θ(h)" />
        <CodeBlock>{postOrder}</CodeBlock>
      </Section>
      <Alert type="Tip">
        Prefer in-order or pre-order because they are tail recursive
      </Alert>
    </PageSectionContainer>
  );
};

export default Intro;
