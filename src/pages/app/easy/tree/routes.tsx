import AppRouteObject from "@/types/app-route-object";
import {
  FileWarning,
  GalleryHorizontalEnd,
  GalleryVerticalEnd,
  Network,
} from "lucide-react";
import { lazy } from "react";

const I = lazy(() => import("./introduction"));
const BST = lazy(() => import("./binary-search-tree"));
const DFS = lazy(() => import("./depth-first-search"));
const BFS = lazy(() => import("./breadth-first-search"));

const treeRoutes: AppRouteObject[] = [
  {
    path: "introduction",
    icon: <FileWarning />,
    name: "Introduction",
    element: <I />,
  },
  {
    path: "binary-search-tree",
    icon: <Network />,
    name: "Binary Search Tree",
    element: <BST />,
  },
  {
    path: "depth-first-search",
    icon: <GalleryVerticalEnd />,
    name: "Depth First Search",
    element: <DFS />,
  },
  {
    path: "breadth-first-search",
    icon: <GalleryHorizontalEnd />,
    name: "Breadth First Search",
    element: <BFS />,
  },
];

export default treeRoutes;
