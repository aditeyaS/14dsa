import { lazy } from "react";
import { ArrowUpNarrowWide, Flag, Merge, Rabbit } from "lucide-react";
import AppRouteObject from "@/types/app-route-object";

const DNF = lazy(() => import("./dutch-national-flag"));
const MS = lazy(() => import("./merge-sort"));
const QS = lazy(() => import("./quick-sort"));
const HS = lazy(() => import("./heap-sort"));

const listRoutes: AppRouteObject[] = [
  {
    path: "dutch-national-flag",
    name: "Dutch National Flag",
    icon: <Flag />,
    element: <DNF />,
  },
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
