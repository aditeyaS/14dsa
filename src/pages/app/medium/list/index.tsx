import { lazy } from "react";
import { ArrowUpNarrowWide, Merge, Rabbit } from "lucide-react";
import AppRouteObject from "@/types/app-route-object";

const MS = lazy(() => import("./merge-sort"));
const QS = lazy(() => import("./quick-sort"));
const HS = lazy(() => import("./heap-sort"));

const listRoutes: AppRouteObject[] = [
  {
    path: "merge-sort",
    name: "Merge Sort",
    icon: <Merge />,
    element: <MS />,
  },
  {
    path: "quick-sort",
    name: "Quick Sort",
    icon: <Rabbit />,
    element: <QS />,
  },
  {
    path: "heap-sort",
    name: "Heap Sort",
    icon: <ArrowUpNarrowWide />,
    element: <HS />,
  },
];

export default listRoutes;
