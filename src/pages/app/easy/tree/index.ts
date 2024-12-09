import { createElement, lazy } from "react";
import AppRouteObject from "@/types/app-route-object";
import {
  FileWarning,
  GalleryHorizontalEnd,
  GalleryVerticalEnd,
  Network,
} from "lucide-react";

const I = lazy(() => import("./introduction"));
const BST = lazy(() => import("./binary-search-tree"));
const DFS = lazy(() => import("./depth-first-search"));
const BFS = lazy(() => import("./breadth-first-search"));

const treeRoutes: AppRouteObject[] = [
  {
    path: "introduction",
    name: "Introduction",
    icon: createElement(FileWarning),
    element: createElement(I),
  },
  {
    path: "binary-search-tree",
    name: "Binary Search Tree",
    icon: createElement(Network),
    element: createElement(BST),
  },
  {
    path: "depth-first-search",
    name: "Depth First Search",
    icon: createElement(GalleryVerticalEnd),
    element: createElement(DFS),
  },
  {
    path: "breadth-first-search",
    name: "Breadth First Search",
    icon: createElement(GalleryHorizontalEnd),
    element: createElement(BFS),
  },
];

export default treeRoutes;
