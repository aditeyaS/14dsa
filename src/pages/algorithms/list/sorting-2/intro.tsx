import React from "react";
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

const margeSort = `# MERGING 2 SORTED SUB ARRAY
def merge(l, low, mid, high):
    iL, iR = 0, 0
    lL = l[low : mid + 1] # left
    lR = l[mid + 1 : high] # right
    i = low
    while iL < len(lL) and iR < len(lR):
        if lL[iL] <= lR[iR]: # = makes it stable
            l[i] = lL[iL]
            iL += 1
        else:
            l[i] = lR[iR]
            iR += 1
        i += 1
    while iL < len(lL):
        l[i] = lL[iL]
        iL += 1
        i += 1
    while iR < len(lR):
        l[i] = lR[iR]
        iR += 1
        i += 1

def mergeSort(arr, l, r):
    if r > l:
        m = (l + r) // 2
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)
        merge(arr, l, m, r)`;

const lumotoPartition = `def lumotoPartition(arr, l, h):
    p = arr[h]
    i = l - 1
    for j in range(l, h):
        if arr[j] < p:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[h] = arr[h], arr[i + 1]
    return i

def quickSort(arr, l, h):
    if l < h:
        p = lumotoPartition(arr, l, h)
        quickSort(arr, l, p - 1)
        quickSort(arr, p + 1, h)`;

const hoaresPartition = `def hoaresPartition(arr, l, h):
    p = arr[l]
    i = l - 1
    j = h + 1
    while True:
        i += 1
        while arr[i] < p:
            i += 1
        j -= 1
        while arr[j] > p:
            j -= 1
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]

def quickSort(arr, l, h):
    if l < h:
        p = hoaresPartition(arr, l, h)
        quickSort(arr, l, p)
        quickSort(arr, p + 1, h)`;

const heapSort = `def buildHeap(l):
  n = len(l)
  for i in range((n - 2)//2, -1, -1):
    maxHeapify(l, n, i)
  
  def maxHeapify(l, n, i):
    largest = i
    left = 2*i + 1
    right = 2*i + 2
    if left < n and l[left] > l[largest]:
      largest = left
    if right < n and l[right] > l[largest]:
      largest = right
    if largest != i:
      l[i], l[largest] = l[largest], l[i]
      maxHeapify(l, n, largest)
      
  def heapSort(l):
    n = len(l)
    buildHeap(l)
    for i in range(n-1, 0, -1):
      l[i], l[0] = l[0], l[i]
      maxHeapify(l, i, 0)`;

const Intro: React.FC = () => {
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
        <CodeBlock>{margeSort}</CodeBlock>
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
              <CodeBlock>{lumotoPartition}</CodeBlock>
              <TEXT className="underline">Hoare's Partition</TEXT>
              <TEXT2>
                # does not guarantee that pivot element is at correct position
              </TEXT2>
              <CodeBlock>{hoaresPartition}</CodeBlock>
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
