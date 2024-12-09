import { createElement, lazy } from "react";
import {
  Binary,
  Braces,
  Cable,
  Calculator,
  ChartSpline,
  Grid3X3,
  Hash,
  Layers,
  List,
  ListEnd,
  Move,
  Parentheses,
  Repeat,
  WholeWord,
} from "lucide-react";
import AppRouteObject from "@/types/app-route-object";

const A = lazy(() => import("./analysis"));
const R = lazy(() => import("./recursion"));
const M = lazy(() => import("./math"));
const T = lazy(() => import("./tuple"));
const SET = lazy(() => import("./hashing/set"));
const DICT = lazy(() => import("./hashing/dictionary"));
const L = lazy(() => import("./list"));
const MAT = lazy(() => import("./matrix"));
const S = lazy(() => import("./string"));
const LL = lazy(() => import("./linked-list"));
const D = lazy(() => import("./deque"));
const STK = lazy(() => import("./stack"));
const Q = lazy(() => import("./queue"));
const BM = lazy(() => import("./bit-magic"));

const basicRoutes: AppRouteObject[] = [
  {
    path: "analysis",
    icon: createElement(ChartSpline),
    name: "Analysis",
    element: createElement(A),
  },
  {
    path: "recursion",
    icon: createElement(Repeat),
    name: "Recursion",
    element: createElement(R),
  },
  {
    path: "math",
    icon: createElement(Calculator),
    name: "Math",
    element: createElement(M),
  },
  {
    path: "tuple",
    icon: createElement(Parentheses),
    name: "Tuple",
    element: createElement(T),
  },
  {
    path: "hashing",
    icon: createElement(Hash),
    name: "Hashing",
    children: [
      {
        path: "set",
        icon: createElement(Parentheses),
        name: "Set",
        element: createElement(SET),
      },
      {
        path: "dictionary",
        icon: createElement(Braces),
        name: "Dictionary",
        element: createElement(DICT),
      },
    ],
  },
  {
    path: "list",
    icon: createElement(List),
    name: "List",
    element: createElement(L),
  },
  {
    path: "matrix",
    icon: createElement(Grid3X3),
    name: "Matrix",
    element: createElement(MAT),
  },
  {
    path: "string",
    icon: createElement(WholeWord),
    name: "String",
    element: createElement(S),
  },
  {
    path: "linked-list",
    icon: createElement(Cable),
    name: "Linked List",
    element: createElement(LL),
  },
  {
    path: "deque",
    icon: createElement(Move),
    name: "Deque",
    element: createElement(D),
  },
  {
    path: "stack",
    icon: createElement(Layers),
    name: "Stack",
    element: createElement(STK),
  },
  {
    path: "queue",
    icon: createElement(ListEnd),
    name: "Queue",
    element: createElement(Q),
  },
  {
    path: "bit-magic",
    icon: createElement(Binary),
    name: "Bit Magic",
    element: createElement(BM),
  },
];

export default basicRoutes;
