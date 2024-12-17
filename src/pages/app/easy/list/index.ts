import { lazy, createElement } from "react";
import AppRouteObject from "@/types/app-route-object";
import {
  AArrowDown,
  ArrowDown01,
  ArrowDownUp,
  CopyPlus,
  BetweenVerticalEnd,
  Blinds,
  CircleFadingPlus,
  Maximize2,
  SquareSigma,
  TextSearch,
} from "lucide-react";

const S = lazy(() => import("./sorting"));
const BS = lazy(() => import("./binary-search"));
const TP = lazy(() => import("./two-pointer"));
const SW = lazy(() => import("./sliding-window"));
const KA = lazy(() => import("./kadane-algorithm"));
const PPS = lazy(() => import("./prefix-postfix-sum"));
const BSORT = lazy(() => import("./bubble-sort"));
const SS = lazy(() => import("./selection-sort"));
const IS = lazy(() => import("./insertion-sort"));
const A = lazy(() => import("./additional"));

const listRoutes: AppRouteObject[] = [
  {
    path: "sorting",
    name: "Sorting",
    icon: createElement(ArrowDownUp),
    element: createElement(S),
  },
  {
    path: "binary-search",
    name: "Binary Search",
    icon: createElement(TextSearch),
    element: createElement(BS),
  },
  {
    path: "two-pointer",
    name: "Two Pointer",
    icon: createElement(Maximize2),
    element: createElement(TP),
  },
  {
    path: "sliding-window",
    name: "Sliding Window",
    icon: createElement(Blinds),
    element: createElement(SW),
  },
  {
    path: "kadane-algorithm",
    name: "Kadane's Algorithm",
    icon: createElement(CopyPlus),
    element: createElement(KA),
  },
  {
    path: "prefix-postfix-sum",
    name: "Prefix/Postfix Sum",
    icon: createElement(SquareSigma),
    element: createElement(PPS),
  },
  {
    path: "bubble-sort",
    name: "Bubble Sort",
    icon: createElement(ArrowDown01),
    element: createElement(BSORT),
  },
  {
    path: "selection-sort",
    name: "Selection Sort",
    icon: createElement(AArrowDown),
    element: createElement(SS),
  },
  {
    path: "insertion-sort",
    name: "Insertion Sort",
    icon: createElement(BetweenVerticalEnd),
    element: createElement(IS),
  },
  {
    path: "additional",
    name: "Additional",
    icon: createElement(CircleFadingPlus),
    element: createElement(A),
  },
];

export default listRoutes;
