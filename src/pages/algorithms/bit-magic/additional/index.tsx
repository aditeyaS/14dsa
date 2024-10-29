import React from "react";
import {
  CodeBlock,
  PageContainer,
  SolutionBlock,
} from "../../../../components";

const powerSet = `def printPowerSet(s: str):
    n = len(s)
    pSize = (1 << n) # 2**n
    for i in range(pSize):
        for j in range(n):
            if (i & (1 << j)) != 0:
                print(s[j], end="")
        print()`;

const BMAdditional: React.FC = () => {
  return (
    <PageContainer title="Bit Magic Additional">
      <SolutionBlock title="Power Set">
        <CodeBlock>{powerSet}</CodeBlock>
      </SolutionBlock>
    </PageContainer>
  );
};

export default BMAdditional;
// https://leetcode.com/problems/subsets/description/
