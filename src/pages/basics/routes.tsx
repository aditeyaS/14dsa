import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const Analysis = lazy(() => import("./analysis"));
const Recursion = lazy(() => import("./recursion"));
const Math = lazy(() => import("./math"));
const BitMagic = lazy(() => import("./bit-magic"));

export const basicsRoutes: RouteObject[] = [
  {
    path: "analysis",
    element: <Analysis />,
  },
  {
    path: "recursion",
    element: <Recursion />,
  },
  {
    path: "math",
    element: <Math />,
  },
  {
    path: "bit-magic",
    element: <BitMagic />,
  },
];
