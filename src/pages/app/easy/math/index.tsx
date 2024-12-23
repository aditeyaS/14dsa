import AppRouteObject from "@/types/app-route-object";
import { Tangent } from "lucide-react";
import { lazy } from "react";

const E = lazy(() => import("./euclidean"));

const mathRoutes: AppRouteObject[] = [
  {
    path: "euclidean",
    name: "Euclidean",
    icon: <Tangent />,
    element: <E />,
  },
];

export default mathRoutes;
