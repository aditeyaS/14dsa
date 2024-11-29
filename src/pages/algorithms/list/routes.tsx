import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const BinarySearch = lazy(() => import("./binary-search"));
const BubbleSort = lazy(() => import("./bubble-sort"));
const SelectionSort = lazy(() => import("./selection-sort"));
const InsertionSort = lazy(() => import("./insertion-sort"));
const MergeSort = lazy(() => import("./merge-sort"));
const QuickSort = lazy(() => import("./quick-sort"));
const HeapSort = lazy(() => import("./heap-sort"));
const SlidingWindow = lazy(() => import("./sliding-window"));
const TwoPointer = lazy(() => import("./2-pointer"));
const PrePostSum = lazy(() => import("./pre-post-sum"));
const Additional = lazy(() => import("./additional"));

export const listRoutes: AppRouteObject[] = [
  {
    path: "binary-search",
    name: "Binary Search",
    element: <BinarySearch />,
  },
  {
    path: "bubble-sort",
    name: "Bubble Sort",
    element: <BubbleSort />,
  },
  {
    path: "selection-sort",
    name: "Selection Sort",
    element: <SelectionSort />,
  },
  {
    path: "insertion-sort",
    name: "Insertion Sort",
    element: <InsertionSort />,
  },
  {
    path: "merge-sort",
    name: "Merge Sort",
    element: <MergeSort />,
  },
  {
    path: "quick-sort",
    name: "Quick Sort",
    element: <QuickSort />,
  },
  {
    path: "heap-sort",
    name: "Heap Sort",
    element: <HeapSort />,
  },
  {
    path: "sliding-window",
    name: "Sliding Window",
    element: <SlidingWindow />,
  },
  {
    path: "2-pointer",
    name: "Two Pointer",
    element: <TwoPointer />,
  },
  {
    path: "pps",
    name: "Prefix/Postfix Sum",
    element: <PrePostSum />,
  },
  {
    path: "additional",
    name: "Additional",
    element: <Additional />,
  },
];
