import { lazy } from "react";
import { AlgorithmRouteObject } from "../routes";
const TreeDFS = lazy(() => import("./dfs"));
const TreeBFS = lazy(() => import("./bfs"));

export const treeRoutes: AlgorithmRouteObject[] = [
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
];
