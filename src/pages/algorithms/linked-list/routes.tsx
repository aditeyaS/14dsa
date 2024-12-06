import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const SLL = lazy(() => import("./single-linked-list"));
const CLL = lazy(() => import("./circular-linked-list"));
const DLL = lazy(() => import("./doubly-linked-list"));
const SlowFast = lazy(() => import("./slow-fast"));
const CycleDetection = lazy(() => import("./cycle-detection"));

export const linkedListRoutes: AppRouteObject[] = [
  {
    path: "sll",
    name: "Single LL",
    element: <SLL />,
  },
  {
    path: "cll",
    name: "Circular LL",
    element: <CLL />,
  },
  {
    path: "dll",
    name: "Doubly LL",
    element: <DLL />,
  },
  {
    path: "sf",
    name: "Slow Fast",
    element: <SlowFast />,
  },
  {
    path: "cycle-detection",
    name: "Floyd's Cycle Detection",
    element: <CycleDetection />,
  },
];
