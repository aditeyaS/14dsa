import { lazy } from "react";
import AppRouteObject from "@/types/app-route-object";
import { Pyramid, Signpost } from "lucide-react";

const TS = lazy(() => import("./topological-sorting"));
const PA = lazy(() => import("./prims-algorithm"));

const graphRoutes: AppRouteObject[] = [
  {
    path: "topological-sorting",
    name: "Topological Sorting",
    icon: <Signpost />,
    element: <TS />,
  },
  {
    path: "prims-algorithm",
    name: "Prim's Algorithm",
    icon: <Pyramid />,
    element: <PA />,
  },
];

export default graphRoutes;
