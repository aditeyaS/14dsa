import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const Traversal = lazy(() => import("./traversal"));
const Transpose = lazy(() => import("./transpose"));

export const matrixRoutes: AppRouteObject[] = [
  {
    path: "traversal",
    name: "Traversal",
    element: <Traversal />,
  },
  {
    path: "transpose",
    name: "Transpose",
    element: <Transpose />,
  },
];
