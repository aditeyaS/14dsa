import AppRouteObject from "@/types/app-route-object";
import { lazy } from "react";

const E = lazy(() => import("./euclidean"));

const mathRoutes: AppRouteObject[] = [
  {
    path: "euclidean",
    name: "Euclidean",
    element: <E />,
  },
];

export default mathRoutes;
