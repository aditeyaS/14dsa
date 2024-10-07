import React, { useEffect, useState } from "react";
import {
  CodeBlock,
  Complexity,
  H2,
  LI,
  PageSectionContainer,
  Section,
  TEXT,
  TEXT2,
  UL,
} from "../../../../components";
import ApiClient from "../../../../lib/api-client";

const Intro: React.FC = () => {
  const apiClient = new ApiClient();
  const [mergeSort, setMergeSort] = useState<string>("");
  const [lumoto, setLumoto] = useState<string>("");
  const [hoares, setHoares] = useState<string>("");
  const [heapSort, setHeapSort] = useState<string>("");

  useEffect(() => {
    fetchMergeSort();
    fetchLumoto();
    fetchHoares();
    fetchHeapSort();
  }, []);

  const fetchMergeSort = async () => {
    try {
      const data = await apiClient.getCode(
        "algorithms/list/sorting-2/merge_sort.py"
      );
      setMergeSort(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const fetchLumoto = async () => {
    try {
      const data = await apiClient.getCode(
        "algorithms/list/sorting-2/lumoto.py"
      );
      setLumoto(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const fetchHoares = async () => {
    try {
      const data = await apiClient.getCode(
        "algorithms/list/sorting-2/hoares.py"
      );
      setHoares(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const fetchHeapSort = async () => {
    try {
      const data = await apiClient.getCode(
        "algorithms/list/sorting-2/heap_sort.py"
      );
      setHeapSort(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  return (
    <PageSectionContainer>
      <Section>
        <H2>Merge Sort</H2>
        <UL>
          <LI>Divide and conquer algo</LI>
          <LI>Stable sorting</LI>
          <LI>Well suited for LL | Quick sort better for list</LI>
          <LI>
            <Complexity time="θ(n log n)" space="O(n)" />
          </LI>
        </UL>
        <CodeBlock>{mergeSort}</CodeBlock>
      </Section>

      <Section>
        <H2>Quick Sort</H2>
        <UL>
          <LI>Divide and conquer algo</LI>
          <LI>Worst case: O(n^2)</LI>
          <LI>
            considered faster - in place, cache friendly, avg O(nlogn), tail
            recursive
          </LI>
          <LI>
            Array partition: Choose 1 element and bring all smaller elements on
            left and larger on right.
          </LI>
          <LI>
            2 partition algorithm: Lomuto & Hoare's
            <Section>
              <TEXT className="underline">Lumoto Partition</TEXT>
              <CodeBlock>{lumoto}</CodeBlock>
              <TEXT className="underline">Hoare's Partition</TEXT>
              <TEXT2>
                # does not guarantee that pivot element is at correct position
              </TEXT2>
              <CodeBlock>{hoares}</CodeBlock>
            </Section>
          </LI>
        </UL>
      </Section>
      <Section>
        <H2>Heap Sort</H2>
        <UL>
          <LI>Optimization over selection sort</LI>
          <LI>Not stable sorting</LI>
          <LI>Used in hybrid sorting algo like Intro Sort</LI>
          <LI>
            <Complexity time="O(n log n)" space="Space: O(1)" />
          </LI>
        </UL>
        <CodeBlock>{heapSort}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
