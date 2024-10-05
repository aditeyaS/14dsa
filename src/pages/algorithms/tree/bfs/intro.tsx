import React from "react";
import { CodeBlock, H2 } from "../../../../components";

const levelOrder = `from collections import deque
def levelOrderTraversal(root):
  if root == None:
    return
  q = deque()
  q.append(root)
  while q:
    t = q.popleft()
    print(t.val)
    if t.left:
      q.append(t.left)
    if t.right:
      q.append*t.right`;

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <H2>Level order traversal</H2>
        <span>Time: θ(n) | Space: O(width of BT)</span>
        <CodeBlock>{levelOrder}</CodeBlock>
      </div>
    </div>
  );
};

export default Intro;
