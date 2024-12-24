import { lazy } from "react";
import AppRouteObject from "@/types/app-route-object";
import {
  Combine,
  FileWarning,
  GalleryHorizontalEnd,
  GalleryVerticalEnd,
} from "lucide-react";

const I = lazy(() => import("./introduction"));
const R = lazy(() => import("./representation"));
const BFS = lazy(() => import("./breadth-first-search"));
const DFS = lazy(() => import("./depth-first-search"));

const graphRoutes: AppRouteObject[] = [
  {
    path: "introduction",
    name: "Introduction",
    icon: <FileWarning />,
    element: <I />,
  },
  {
    path: "representation",
    name: "Representation",
    icon: <Combine />,
    element: <R />,
  },
  {
    path: "breadth-first-search",
    name: "Breadth First Search",
    icon: <GalleryHorizontalEnd />,
    element: <BFS />,
  },
  {
    path: "depth-first-search",
    name: "Depth First Search",
    icon: <GalleryVerticalEnd />,
    element: <DFS />,
  },
];

export default graphRoutes;
