import React from "react";
import { Alert, CodeBlock, H2 } from "../../../../components";

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
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>{`in-order: left -> root (parent P) -> right`}</li>
        <li>{`pre-order: root -> left -> right`}</li>
        <li>{`post-order: left -> right -> root`}</li>
      </ul>
      <div className="flex flex-col gap-1">
        <H2>In-order (LPR)</H2>
        <span>Time: θ(n) | Space: θ(h)</span>
        <CodeBlock>{inOrder}</CodeBlock>
      </div>
      <div className="flex flex-col gap-1">
        <H2>Pre-order (PLR)</H2>
        <span>Time: θ(n) | Space: θ(h)</span>
        <CodeBlock>{preOrder}</CodeBlock>
      </div>
      <div className="flex flex-col gap-1">
        <H2>Post-order (LRP)</H2>
        <span>Time: θ(n) | Space: θ(h)</span>
        <CodeBlock>{postOrder}</CodeBlock>
      </div>
      <Alert type="Tip">
        Prefer in-order or pre-order because they are tail recursive
      </Alert>
    </div>
  );
};

export default Intro;
