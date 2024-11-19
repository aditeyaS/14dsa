import { lazy } from "react";
import { AlgorithmRouteObject } from "../routes";
const BKA = lazy(() => import("./bka"));
const BMAdditional = lazy(() => import("./additional"));

export const bitMagicRoutes: AlgorithmRouteObject[] = [
  {
    path: "bka",
    name: "Brian Kernigam's Algorithm",
    element: <BKA />,
  },
  {
    path: "additional",
    name: "Additional",
    element: <BMAdditional />,
  },
];
