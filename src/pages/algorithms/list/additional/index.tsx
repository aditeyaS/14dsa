import React from "react";
import {
  CodeBlock,
  H2,
  PageContainer,
  Section,
  SolutionBlock,
} from "../../../../components";

const maxSubArraySum = `def maxEvenOdd(l):
    res = 1
    curr = 1
    for i in range(1, n):
        if (l[i]%2 == 0 and l[i-1]%2 != 0) or (l[i]%2 != 0 and l[i-1]%2 == 0):
            curr += 1
            res = max(res, curr)
        else:
            curr = 1
    return res`;

const majorityElement = `def findMajority(arr):
  n = len(arr)
  # finding the majority
  res = 0
  count = 1
  for i in range(1, n):
    if arr[res] == arr[i]:
      count += 1
    else:
      count -= 1
    if count == 0:
      res = i
      count = 1
  # verifying the majority
  count = 0
  for i in range(n):
    if arr[res] == arr[i]:
      count += 1
  if count <= n // 2:
    res = -1
  return res`;

const ListAdditional: React.FC = () => {
  return (
    <PageContainer title="List Additional">
      <Section>
        <H2>Kadane’s Algorithm</H2>
        <SolutionBlock title="Maximum length even odd subarray">
          <CodeBlock>{maxSubArraySum}</CodeBlock>
        </SolutionBlock>
      </Section>
      <Section>
        <H2>Boyer-Moore Majority Voting Algorithm</H2>
        <SolutionBlock title="Majority element">
          <CodeBlock>{majorityElement}</CodeBlock>
        </SolutionBlock>
      </Section>
    </PageContainer>
  );
};

export default ListAdditional;
