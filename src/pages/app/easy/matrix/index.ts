import AppRouteObject from "@/types/app-route-object";
import { FlipHorizontal2, RailSymbol } from "lucide-react";
import { createElement, lazy } from "react";

const TL = lazy(() => import("./traversal"));
const TE = lazy(() => import("./transpose"));

const matrixRoutes: AppRouteObject[] = [
  {
    path: "traversal",
    icon: createElement(RailSymbol),
    name: "Traversal",
    element: createElement(TL),
  },
  {
    path: "transpose",
    icon: createElement(FlipHorizontal2),
    name: "Transpose",
    element: createElement(TE),
  },
];

export default matrixRoutes;
