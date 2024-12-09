import AppRouteObject from "@/types/app-route-object";
import { lazy, createElement } from "react";

const E = lazy(() => import("./euclidean"));

const mathRoutes: AppRouteObject[] = [
  {
    path: "euclidean",
    name: "Euclidean",
    element: createElement(E),
  },
];

export default mathRoutes;
