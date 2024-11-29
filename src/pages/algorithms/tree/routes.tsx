import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const DFS = lazy(() => import("./dfs"));
const BFS = lazy(() => import("./bfs"));

export const treeRoutes: AppRouteObject[] = [
  {
    path: "dfs",
    name: "DFS",
    element: <DFS />,
  },
  {
    path: "bfs",
    name: "BFS",
    element: <BFS />,
  },
];
