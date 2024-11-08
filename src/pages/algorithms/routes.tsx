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

export const AlgorithmRoutes: RouteObject = {
  path: "algorithms",
  children: [
    {
      path: "bit-magic",
      children: [
        {
          path: "bka",
          element: <BKA />,
        },
        {
          path: "additional",
          element: <BMAdditional />,
        },
      ],
    },
    {
      path: "list",
      children: [
        {
          path: "search",
          element: <ListSearch />,
        },
        {
          path: "sorting-1",
          element: <Sorting1 />,
        },
        {
          path: "sorting-2",
          element: <Sorting2 />,
        },
        {
          path: "sliding-2-prefix",
          element: <Sliding2Prefix />,
        },
        {
          path: "additional",
          element: <ListAdditioanl />,
        },
      ],
    },
    {
      path: "recursion",
      children: [
        {
          path: "additional",
          element: <RecursionAdditional />,
        },
      ],
    },
    {
      path: "linked-list",
      children: [
        {
          path: "2-pointers",
          element: <C2Pointers />,
        },
      ],
    },
    {
      path: "tree",
      children: [
        {
          path: "dfs",
          element: <TreeDFS />,
        },
        {
          path: "bfs",
          element: <TreeBFS />,
        },
      ],
    },
  ],
};
