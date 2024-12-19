import { lazy } from "react";
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
    icon: <Link />,
    name: "Singly Linked List",
    element: <SLL />,
  },
  {
    path: "slow-fast-pointer",
    icon: <Turtle />,
    name: "Slow Fast Pointer",
    element: <SLP />,
  },
  {
    path: "cycle-detection",
    icon: <RefreshCcwDot />,
    name: "Cycle Detection",
    element: <CD />,
  },
  {
    path: "doubly-linked-list",
    icon: <ChevronsLeftRightEllipsis />,
    name: "Doubly Linked List",
    element: <DLL />,
  },
  {
    path: "circular-linked-list",
    icon: <ListRestart />,
    name: "Circular Linked List",
    element: <CLL />,
  },
];

export default linkedListRoutes;
