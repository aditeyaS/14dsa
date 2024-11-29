import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const BKA = lazy(() => import("./bka"));
const Additional = lazy(() => import("./additional"));

export const bitMagicRoutes: AppRouteObject[] = [
  {
    path: "bka",
    name: "Brian Kernigam's",
    element: <BKA />,
  },
  {
    path: "additional",
    name: "Additional",
    element: <Additional />,
  },
];
