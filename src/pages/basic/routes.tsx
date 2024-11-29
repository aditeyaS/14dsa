import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const Analysis = lazy(() => import("./analysis"));
const Recursion = lazy(() => import("./recursion"));
const Math = lazy(() => import("./math"));
const BitMagic = lazy(() => import("./bit-magic"));

export const basicsRoutes: AppRouteObject[] = [
  {
    path: "analysis",
    name: "Analysis",
    element: <Analysis />,
  },
  {
    path: "recursion",
    name: "Recursion",
    element: <Recursion />,
  },
  {
    path: "math",
    name: "Math",
    element: <Math />,
  },
  {
    path: "bit-magic",
    name: "Bit Magic",
    element: <BitMagic />,
  },
];
