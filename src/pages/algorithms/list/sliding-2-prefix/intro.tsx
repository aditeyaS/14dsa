import React from "react";
import {
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  SolutionBlock,
  UL,
} from "../../../../components";

const maxKSum = `def maxKSum(arr, k):
  curr = 0
  for i in range(k):
    curr += arr[i]
  res = curr
  for i in range(k, len(arr)):
    curr = curr + arr[i] - arr[i-k]
    res = max(res, curr)
  return res`;

const subarrayWithGivenSum = `def subarrayWithGivenSum(arr, x):
  s, curr = 0, 0 # start index, current sum
  for e in range(len(arr)):
    curr += arr[e]
    while curr > x:
      curr -= arr[s]
      s += 1
    if curr == x:
      return True
  return False`;

const twoPointers = ``;

const prefixSum = `def subArraySums(arr, indexes):
  n = len(arr)
  pSum = [0] * n
  pSump[0] = arr[0]
  for i in range(1, n):
    pSum[i] = pSum[i - 1] + arr[i]
  res = []
  for l, r in indexes:
    if l == 0:
      res.append(pSum[r])
    else:
      res.append(pSum[r] - pSum[l-1])
  return res`;

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <Section>
        <H2>Sliding window</H2>
        <UL>
          <LI>
            problems that involve defining a window or range in the input data
            (arrays or strings) and then moving that window across the data to
            perform some operation within the window
          </LI>
          <LI>The window can be of fixed or variable length</LI>
          <LI>
            {`depending on the use case there are multiple ways to create window ->
            d = deque(); with one variable for sum etc.`}
          </LI>
        </UL>
        <SolutionBlock title="Max sum of k consecutive elements">
          <CodeBlock>{maxKSum}</CodeBlock>
        </SolutionBlock>
        <SolutionBlock title="Subarray with given sum">
          <CodeBlock>{subarrayWithGivenSum}</CodeBlock>
        </SolutionBlock>
      </Section>
      <Section>
        <H2>2 pointer</H2>
        <UL>
          <LI>
            2 pointers are used - left & right, slow & fast depending on the
            situation
          </LI>
        </UL>
        <CodeBlock>{twoPointers}</CodeBlock>
      </Section>
      <Section>
        <H2>Prefix/Postfix sum</H2>
        <UL>
          <LI>Used for searching in sorted array</LI>
        </UL>
        <SolutionBlock title="find sum of subarray between indexes">
          <CodeBlock>{prefixSum}</CodeBlock>
        </SolutionBlock>
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
