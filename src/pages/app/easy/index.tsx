import { lazy } from "react";
import {
  Cable,
  Calculator,
  FolderTree,
  Grid3X3,
  List,
  ListFilter,
  TreePalm,
} from "lucide-react";
import AppRouteObject from "@/types/app-route-object";

import listRoutes from "./list";
import matrixRoutes from "./matrix";
import linkedListRoutes from "./linked-list";
import treeRoutes from "./tree";
import mathRoutes from "./math";

const H = lazy(() => import("./heap"));
const T = lazy(() => import("./trie"));

const easyRoutes: AppRouteObject[] = [
  {
    path: "math",
    icon: <Calculator />,
    name: "Math",
    children: mathRoutes,
  },
  {
    path: "list",
    icon: <List />,
    name: "List",
    children: listRoutes,
  },
  {
    path: "matrix",
    icon: <Grid3X3 />,
    name: "Matrix",
    children: matrixRoutes,
  },
  {
    path: "linked-list",
    icon: <Cable />,
    name: "Linked List",
    children: linkedListRoutes,
  },
  {
    path: "tree",
    icon: <TreePalm />,
    name: "Tree",
    children: treeRoutes,
  },
  {
    path: "heap",
    icon: <ListFilter />,
    name: "Heap",
    element: <H />,
  },
  {
    path: "trie",
    icon: <FolderTree />,
    name: "Trie",
    element: <T />,
  },
];

export default easyRoutes;
