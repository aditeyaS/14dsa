import { lazy } from "react";
import { AlgorithmRouteObject } from "../routes";
const C2Pointers = lazy(() => import("./2-pointers"));

export const linkedListRoutes: AlgorithmRouteObject[] = [
  {
    path: "2-pointers",
    name: "2 Pointers: Slow fast, cycle detection",
    element: <C2Pointers />,
  },
];
