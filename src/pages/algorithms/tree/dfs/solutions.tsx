import { CodeBlock, H1, SolutionBlock } from "../../../../components";

const height = `def height(root): # h1
    if root == None:
        return 0 # replace with -1 for h2
    lh = height(root.left)
    rh = height(root.right)
    return 1 + max(lh, rh)`;

export const Solutions = () => {
  return (
    <div className="flex flex-col gap-4">
      <H1>Common solutions</H1>
      <ul className="flex flex-col gap-1">
        <li>
          <SolutionBlock title="height of tree">
            <ul className="text-md list-disc list-inside">
              <li>1st convention: number of nodes on longest path (h1)</li>
              <li>2nd convention: number of edges on longest path (h2)</li>
            </ul>
            <span>Time: θ(n) | Space: θ(h)</span>
            <CodeBlock>{height}</CodeBlock>
          </SolutionBlock>
        </li>
      </ul>
    </div>
  );
};
