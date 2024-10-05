import {
  CodeBlock,
  Complexity,
  H1,
  PageSectionContainer,
  Section,
  SolutionBlock,
  TEXT,
} from "../../../../components";

const height = `def height(root): # h1
    if root == None:
        return 0 # replace with -1 for h2
    lh = height(root.left)
    rh = height(root.right)
    return 1 + max(lh, rh)`;

export const Solutions = () => {
  return (
    <PageSectionContainer>
      <H1>Common solutions</H1>
      <Section>
        <SolutionBlock title="height of tree">
          <TEXT>- 1st convention: number of nodes on longest path (h1)</TEXT>
          <TEXT>- 2nd convention: number of edges on longest path (h2)</TEXT>
          <Complexity time="θ(n)" space="θ(h)" />
          <CodeBlock>{height}</CodeBlock>
        </SolutionBlock>
      </Section>
    </PageSectionContainer>
  );
};
