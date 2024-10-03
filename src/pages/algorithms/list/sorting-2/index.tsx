import React from "react";
import { CodeBlock, H2, PageContainer } from "../../../../components";

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

// TODO: Heap Sort
const heapSort = ``;

const Sorting2: React.FC = () => {
  return (
    <PageContainer title="Sorting 2 - Merge, Quick, Heap">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <H2>Merge Sort</H2>
          <ul className="text-xl list-disc list-inside">
            <li>Divide and conquer algo</li>
            <li>Stable sorting</li>
            <li>Time: θ(n log n) | Space: O(n)</li>
            <li>Well suited for LL | Quick sort better for list</li>
          </ul>
          <CodeBlock>{margeSort}</CodeBlock>
        </div>
        <div className="flex flex-col gap-1">
          <H2>Quick Sort</H2>
          <ul className="text-xl list-disc list-inside">
            <li>Divide and conquer algo</li>
            <li>Worst case: O(n^2)</li>
            <li>
              considered faster - in place, cache friendly, avg O(nlogn), tail
              recursive
            </li>
            <li>
              Array partition: Choose 1 element and bring all smaller elements
              on left and larger on right.
            </li>
            <li>
              2 partition algorithm: Lomuto & Hoare's
              <div className="flex flex-col">
                <span className="underline text-lg">Lumoto Partition</span>
                <CodeBlock>{lumotoPartition}</CodeBlock>
                <span className="underline text-lg">Hoare's Partition</span>
                <span>
                  # does not guarantee that pivot element is at correct position
                </span>
                <CodeBlock>{hoaresPartition}</CodeBlock>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <H2>Heap Sort</H2>
          <ul className="text-xl list-disc list-inside">
            <li>Optimization over selection sort</li>
            <li>Not stable sorting</li>
            <li>Time: θ(n log n) | Space: O(1)</li>
            <li>Used in hybrid sorting algo like Intro Sort</li>
          </ul>
          <CodeBlock>{heapSort}</CodeBlock>
        </div>
      </div>
    </PageContainer>
  );
};

export default Sorting2;
