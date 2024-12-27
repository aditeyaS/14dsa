import { lazy } from "react";
import AppRouteObject from "@/types/app-route-object";
import { Banana, Pyramid, Signpost } from "lucide-react";

const TS = lazy(() => import("./topological-sorting"));
const PA = lazy(() => import("./prims-algorithm"));
const DA = lazy(() => import("./dijkstra-algorithm"));

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
  {
    path: "dijkstra-algorithm",
    name: "Dijkstra's Algorithm",
    icon: <Banana />,
    element: <DA />,
  },
];

export default graphRoutes;
