import AppRouteObject from "@/types/app-route-object";
import { FlipHorizontal2, RailSymbol } from "lucide-react";
import { lazy } from "react";

const TL = lazy(() => import("./traversal"));
const TE = lazy(() => import("./transpose"));

const matrixRoutes: AppRouteObject[] = [
  {
    path: "traversal",
    icon: <RailSymbol />,
    name: "Traversal",
    element: <TL />,
  },
  {
    path: "transpose",
    icon: <FlipHorizontal2 />,
    name: "Transpose",
    element: <TE />,
  },
];

export default matrixRoutes;
