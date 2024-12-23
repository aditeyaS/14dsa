import { lazy } from "react";
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
    icon: <FileWarning />,
    element: <I />,
  },
  {
    path: "depth-first-search",
    name: "Depth First Search",
    icon: <GalleryVerticalEnd />,
    element: <DFS />,
  },
  {
    path: "breadth-first-search",
    name: "Breadth First Search",
    icon: <GalleryHorizontalEnd />,
    element: <BFS />,
  },
  {
    path: "binary-search-tree",
    name: "Binary Search Tree",
    icon: <Network />,
    element: <BST />,
  },
];

export default treeRoutes;
