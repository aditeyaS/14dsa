import { createElement, lazy } from "react";
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
    icon: createElement(Calculator),
    name: "Math",
    children: mathRoutes,
  },
  {
    path: "list",
    icon: createElement(List),
    name: "List",
    children: listRoutes,
  },
  {
    path: "matrix",
    icon: createElement(Grid3X3),
    name: "Matrix",
    children: matrixRoutes,
  },
  {
    path: "linked-list",
    icon: createElement(Cable),
    name: "Linked List",
    children: linkedListRoutes,
  },
  {
    path: "tree",
    icon: createElement(TreePalm),
    name: "Tree",
    children: treeRoutes,
  },
  {
    path: "heap",
    icon: createElement(ListFilter),
    name: "Heap",
    element: createElement(H),
  },
  {
    path: "trie",
    icon: createElement(FolderTree),
    name: "Trie",
    element: createElement(T),
  },
];

export default easyRoutes;
