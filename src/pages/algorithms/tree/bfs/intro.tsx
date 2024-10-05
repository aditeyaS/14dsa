import React from "react";
import {
  CodeBlock,
  Complexity,
  H2,
  PageSectionContainer,
  Section,
} from "../../../../components";

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
    <PageSectionContainer>
      <Section>
        <H2>Level order traversal</H2>
        <Complexity time="θ(n)" space="O(width of BT)" />
        <CodeBlock>{levelOrder}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
