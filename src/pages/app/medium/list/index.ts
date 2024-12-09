import { createElement, lazy } from "react";
import { ArrowUpNarrowWide, Merge, Rabbit } from "lucide-react";
import AppRouteObject from "@/types/app-route-object";

const MS = lazy(() => import("./merge-sort"));
const QS = lazy(() => import("./quick-sort"));
const HS = lazy(() => import("./heap-sort"));

const listRoutes: AppRouteObject[] = [
  {
    path: "merge-sort",
    name: "Merge Sort",
    icon: createElement(Merge),
    element: createElement(MS),
  },
  {
    path: "quick-sort",
    name: "Quick Sort",
    icon: createElement(Rabbit),
    element: createElement(QS),
  },
  {
    path: "heap-sort",
    name: "Heap Sort",
    icon: createElement(ArrowUpNarrowWide),
    element: createElement(HS),
  },
];

export default listRoutes;
