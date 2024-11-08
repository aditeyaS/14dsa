import React from "react";
import {
  CodeBlock,
  Complexity,
  H2,
  LI,
  PageContainer,
  Section,
  SolutionBlock,
  UL,
} from "../../../../components";

const binarySearch = `def binary_search(arr, target):
    l = 0
    r = len(arr) - 1
    while l <= r:
        mid = (l + r) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            r = mid - 1
        else:
            l = mid + 1
    return -1`;

const majorityElement = `def search(arr, x):
    l, h = 0, N - 1
    while l <= h:
        mid = (l + h) // 2
        if arr[mid] == x:
            return mid
        if arr[l] < arr[mid]:
            if arr[l] <= x < arr[mid]:
                h = mid - 1
            else:
                l = mid + 1
        else:
            if arr[mid] < x <= arr[h]:
                l = mid + 1
            else:
                h = mid - 1
    return -1`;

const ListSearch: React.FC = () => {
  return (
    <PageContainer title="List Search">
      <Section>
        <H2>Binary Search</H2>
        <UL>
          <LI>Used for searching in sorted array</LI>
          <LI>
            <Complexity time="O(log n)" space="O(1)" />
          </LI>
        </UL>
        <SolutionBlock title="Binary Search">
          <CodeBlock>{binarySearch}</CodeBlock>
        </SolutionBlock>
        <SolutionBlock title="Search in sorted rotated array">
          <CodeBlock>{majorityElement}</CodeBlock>
        </SolutionBlock>
      </Section>
    </PageContainer>
  );
};

export default ListSearch;
