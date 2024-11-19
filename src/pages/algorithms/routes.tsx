import { lazy } from "react";
import { NonIndexRouteObject } from "react-router-dom";
import { bitMagicRoutes } from "./bit-magic/routes";
import { linkedListRoutes } from "./linked-list/routes";
import { listRoutes } from "./list/routes";
import { treeRoutes } from "./tree/routes";
const RecursionAdditional = lazy(() => import("./recursion/additional"));

export interface AlgorithmRouteObject extends NonIndexRouteObject {
  name: string;
}

interface PageRoutes {
  path: string;
  title: string;
  children: AlgorithmRouteObject[];
}

export const algorithmRoutes: PageRoutes[] = [
  {
    path: "bit-magic",
    title: "Bit Magic",
    children: bitMagicRoutes,
  },
  {
    path: "list",
    title: "List",
    children: listRoutes,
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
    children: linkedListRoutes,
  },
  {
    path: "tree",
    title: "Tree",
    children: treeRoutes,
  },
];
