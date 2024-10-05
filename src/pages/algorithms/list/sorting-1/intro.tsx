import React from "react";
import {
  CodeBlock,
  Complexity,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../../components";

const bubbleSort = `for i in range(n):
  swapped = False
  for j in range(n - i - 1):
    if arr[j] > arr[j + 1]:
      arr[j], arr[j + 1] = arr[j + 1], arr[j]
      swapped = True
  if not swapped:
    break`;

const selectionSort = `for i in range(n):
  minIdx = i
  for j in range(i + 1, n):
    if arr[i] < arr[minIdx]:
      minIdx = i
  arr[minIdx], arr[i] = arr[i], arr[minIdx]`;

const insertionSort = `for i in range(1, n):
  x = arr[i]
  j = i - 1
  while j >= 0 and x < arr[j]:
    arr[j + 1] = arr[j]
    j -= 1
  arr[j + 1] = x`;

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>
          Stability in sorting: Order of occurrence is maintained when values
          are same
        </LI>
        <LI>sort() and sorted() are stable</LI>
      </UL>
      <Section>
        <H2>Bubble Sort</H2>
        <UL>
          <LI>Stable sorting</LI>
          <LI>
            <Complexity time="O(n^2)" space="O(1)" />
          </LI>
        </UL>
        <CodeBlock>{bubbleSort}</CodeBlock>
      </Section>
      <Section>
        <H2>Selection Sort</H2>
        <UL>
          <LI>Not stable</LI>
          <LI>
            <Complexity time="θ(n^2)" space="O(1)" />
          </LI>
        </UL>
        <CodeBlock>{selectionSort}</CodeBlock>
      </Section>
      <Section>
        <H2>Insertion Sort</H2>
        <UL>
          <LI>Stable sorting</LI>
          <LI>Time: Best - O(n) | Avg,Worst - O(n^2)</LI>
          <LI>
            <Complexity time="O(n^2)" space="O(1)" />
          </LI>
        </UL>
        <CodeBlock>{insertionSort}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
