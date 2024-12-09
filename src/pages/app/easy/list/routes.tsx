import AppRouteObject from "@/types/app-route-object";
import {
  AArrowDown,
  ArrowDown01,
  ArrowDownUp,
  BetweenVerticalEnd,
  Blinds,
  CircleFadingPlus,
  Maximize2,
  SquareSigma,
  TextSearch,
} from "lucide-react";
import { lazy } from "react";

const S = lazy(() => import("./sorting"));
const BS = lazy(() => import("./binary-search"));
const TP = lazy(() => import("./two-pointer"));
const SW = lazy(() => import("./sliding-window"));
const PPS = lazy(() => import("./prefix-postfix-sum"));
const BSORT = lazy(() => import("./bubble-sort"));
const SS = lazy(() => import("./selection-sort"));
const IS = lazy(() => import("./insertion-sort"));
const A = lazy(() => import("./additional"));

const listRoutes: AppRouteObject[] = [
  {
    path: "sorting",
    name: "Sorting",
    icon: <ArrowDownUp />,
    element: <S />,
  },
  {
    path: "binary-search",
    name: "Binary Search",
    icon: <TextSearch />,
    element: <BS />,
  },
  {
    path: "two-pointer",
    name: "Two Pointer",
    icon: <Maximize2 />,
    element: <TP />,
  },
  {
    path: "sliding-window",
    name: "Sliding Window",
    icon: <Blinds />,
    element: <SW />,
  },
  {
    path: "prefix-postfix-sum",
    name: "Prefix/Postfix Sum",
    icon: <SquareSigma />,
    element: <PPS />,
  },
  {
    path: "bubble-sort",
    name: "Bubble Sort",
    icon: <ArrowDown01 />,
    element: <BSORT />,
  },
  {
    path: "selection-sort",
    name: "Selection Sort",
    icon: <AArrowDown />,
    element: <SS />,
  },
  {
    path: "insertion-sort",
    name: "Insertion Sort",
    icon: <BetweenVerticalEnd />,
    element: <IS />,
  },
  {
    path: "additional",
    name: "Additional",
    icon: <CircleFadingPlus />,
    element: <A />,
  },
];

export default listRoutes;
