import React from "react";
import {
  CodeBlock,
  Complexity,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../../components";

const binarySearch = `l = 0
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

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <Section>
        <UL>
          <LI>Used for searching in sorted array</LI>
          <LI>
            <Complexity time="O(log n)" space="O(1)" />
          </LI>
        </UL>
        <CodeBlock>{binarySearch}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
