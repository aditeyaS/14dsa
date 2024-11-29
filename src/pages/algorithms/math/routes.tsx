import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const Euclidean = lazy(() => import("./euclidean"));

export const mathRoutes: AppRouteObject[] = [
  {
    path: "euclidean",
    name: "Euclidean (GCD)",
    element: <Euclidean />,
  },
];
