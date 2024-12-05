import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const SlowFast = lazy(() => import("./slow-fast"));
const CycleDetection = lazy(() => import("./cycle-detection"));

export const linkedListRoutes: AppRouteObject[] = [
  {
    path: "slow-fast",
    name: "Slow Fast",
    element: <SlowFast />,
  },
  {
    path: "cycle-detection",
    name: "Floyd's Cycle Detection",
    element: <CycleDetection />,
  },
];
