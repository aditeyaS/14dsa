import React, { useEffect, useState } from "react";
import {
  CodeBlock,
  Complexity,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../../components";
import ApiClient from "../../../../lib/api-client";

const Intro: React.FC = () => {
  const apiClient = new ApiClient();
  const [bubbleSort, setBubbleSort] = useState<string>("");
  const [selectionSort, setSelectionSort] = useState<string>("");
  const [insertionSort, setInsertionSort] = useState<string>("");

  useEffect(() => {
    fetchBubbleSort();
    fetchSelectionSort();
    fetchInsertionSort();
  }, []);

  const fetchBubbleSort = async () => {
    try {
      const data = await apiClient.getCode(
        "algorithms/list/sorting-1/bubble_sort.py"
      );
      setBubbleSort(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const fetchSelectionSort = async () => {
    try {
      const data = await apiClient.getCode(
        "algorithms/list/sorting-1/selection_sort.py"
      );
      setSelectionSort(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const fetchInsertionSort = async () => {
    try {
      const data = await apiClient.getCode(
        "algorithms/list/sorting-1/insertion_sort.py"
      );
      setInsertionSort(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

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
