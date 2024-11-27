import { lazy } from "react";
import { AlgorithmRouteObject } from "../routes";
const ListSearch = lazy(() => import("./search"));
const Sorting1 = lazy(() => import("./sorting-1"));
const Sorting2 = lazy(() => import("./sorting-2"));
const Sliding2Prefix = lazy(() => import("./sliding-2-prefix"));
const ListAdditional = lazy(() => import("./additional"));

export const listRoutes: AlgorithmRouteObject[] = [
  {
    path: "search",
    name: "Search",
    element: <ListSearch />,
  },
  {
    path: "sorting-1",
    name: "Sorting 1: Bubble, Selection, and Insertion",
    element: <Sorting1 />,
  },
  {
    path: "sorting-2",
    name: "Sorting 2: Merge, Quick, Heap",
    element: <Sorting2 />,
  },
  {
    path: "sliding-2-prefix",
    name: "Sliding window, 2 pointer, Prefix Sum",
    element: <Sliding2Prefix />,
  },
  {
    path: "additional",
    name: "Additional",
    element: <ListAdditional />,
  },
];
