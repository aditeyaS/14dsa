import { createElement, lazy } from "react";
import AppRouteObject from "@/types/app-route-object";
import {
  ChevronsLeftRightEllipsis,
  Link,
  ListRestart,
  RefreshCcwDot,
  Turtle,
} from "lucide-react";

const SLL = lazy(() => import("./singly-linked-list"));
const SLP = lazy(() => import("./slow-fast-pointer"));
const CD = lazy(() => import("./cycle-detection"));
const DLL = lazy(() => import("./doubly-linked-list"));
const CLL = lazy(() => import("./circular-linked-list"));

const linkedListRoutes: AppRouteObject[] = [
  {
    path: "singly-linked-list",
    icon: createElement(Link),
    name: "Singly Linked List",
    element: createElement(SLL),
  },
  {
    path: "slow-fast-pointer",
    icon: createElement(Turtle),
    name: "Slow Fast Pointer",
    element: createElement(SLP),
  },
  {
    path: "cycle-detection",
    icon: createElement(RefreshCcwDot),
    name: "Cycle Detection",
    element: createElement(CD),
  },
  {
    path: "doubly-linked-list",
    icon: createElement(ChevronsLeftRightEllipsis),
    name: "Doubly Linked List",
    element: createElement(DLL),
  },
  {
    path: "circular-linked-list",
    icon: createElement(ListRestart),
    name: "Circular Linked List",
    element: createElement(CLL),
  },
];

export default linkedListRoutes;
