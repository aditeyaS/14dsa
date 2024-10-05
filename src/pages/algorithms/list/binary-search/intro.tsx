import React from "react";
import { CodeBlock, LI, UL } from "../../../../components";

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
    <div className="flex flex-col gap-4">
      <UL>
        <LI>Used for searching in sorted array</LI>
        <LI>Time: O(log n)</LI>
      </UL>
      <CodeBlock>{binarySearch}</CodeBlock>
    </div>
  );
};

export default Intro;
