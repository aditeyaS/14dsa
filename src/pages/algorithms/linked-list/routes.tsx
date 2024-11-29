import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const SlowFast = lazy(() => import("./slow-fast"));

export const linkedListRoutes: AppRouteObject[] = [
  {
    path: "slow-fast",
    name: "Slow Fast",
    element: <SlowFast />,
  },
];
