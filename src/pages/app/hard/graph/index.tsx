import { lazy } from "react";
import AppRouteObject from "@/types/app-route-object";
import { Bell, Crown } from "lucide-react";

const KA = lazy(() => import("./kosaraju-algorithm"));
const BF = lazy(() => import("./bellman-ford"));

const graphRoutes: AppRouteObject[] = [
  {
    path: "kosaraju-algorithm",
    name: "Kosaraju's Algorithm",
    icon: <Crown />,
    element: <KA />,
  },
  {
    path: "bellman-ford",
    name: "Bellman Ford",
    icon: <Bell />,
    element: <BF />,
  },
];

export default graphRoutes;
