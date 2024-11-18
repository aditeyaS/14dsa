import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const ListSearch = lazy(() => import("./list/search"));
const Sorting1 = lazy(() => import("./list/sorting-1"));
const Sorting2 = lazy(() => import("./list/sorting-2"));
const Sliding2Prefix = lazy(() => import("./list/sliding-2-prefix"));
const ListAdditioanl = lazy(() => import("./list/additional"));
const RecursionAdditional = lazy(() => import("./recursion/additional"));
const C2Pointers = lazy(() => import("./linked-list/2-pointers"));
const TreeDFS = lazy(() => import("./tree/dfs"));
const TreeBFS = lazy(() => import("./tree/bfs"));
const BKA = lazy(() => import("./bit-magic/bka"));
const BMAdditional = lazy(() => import("./bit-magic/additional"));

interface PathRouteChild {
  path: string;
  name: string;
  element: JSX.Element;
}

interface PageRoutes {
  path: string;
  title: string;
  children: PathRouteChild[];
}

export const algorithmRoutes: PageRoutes[] = [
  {
    path: "bit-magic",
    title: "Bit Magic",
    children: [
      {
        path: "bka",
        name: "Brian Kernigam's Algorithm",
        element: <BKA />,
      },
      {
        path: "additional",
        name: "Additional",
        element: <BMAdditional />,
      },
    ],
  },
  {
    path: "list",
    title: "List",
    children: [
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
        element: <ListAdditioanl />,
      },
    ],
  },
  {
    path: "recursion",
    title: "Recursion",
    children: [
      {
        path: "additional",
        name: "Additional",
        element: <RecursionAdditional />,
      },
    ],
  },
  {
    path: "linked-list",
    title: "Linked List",
    children: [
      {
        path: "2-pointers",
        name: "2 Pointers: Slow fast, cycle detection",
        element: <C2Pointers />,
      },
    ],
  },
  {
    path: "tree",
    title: "Tree",
    children: [
      {
        path: "dfs",
        name: "Depth First (in-order, pre-order, post-order)",
        element: <TreeDFS />,
      },
      {
        path: "bfs",
        name: "Breadth First",
        element: <TreeBFS />,
      },
    ],
  },
];

export const AlgorithmRoutes: RouteObject = {
  path: "algorithms",
  children: [...algorithmRoutes],
};
