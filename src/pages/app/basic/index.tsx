import { lazy } from "react";
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
    id: "b/analysis",
    path: "analysis",
    icon: <ChartSpline />,
    name: "Analysis",
    element: <A />,
  },
  {
    id: "b/recursion",
    path: "recursion",
    icon: <Repeat />,
    name: "Recursion",
    element: <R />,
  },
  {
    id: "b/math",
    path: "math",
    icon: <Calculator />,
    name: "Math",
    element: <M />,
  },
  {
    id: "b/tuple",
    path: "tuple",
    icon: <Parentheses />,
    name: "Tuple",
    element: <T />,
  },
  {
    path: "hashing",
    icon: <Hash />,
    name: "Hashing",
    children: [
      {
        id: "b/set",
        path: "set",
        icon: <Parentheses />,
        name: "Set",
        element: <SET />,
      },
      {
        id: "b/dictionary",
        path: "dictionary",
        icon: <Braces />,
        name: "Dictionary",
        element: <DICT />,
      },
    ],
  },
  {
    id: "b/list",
    path: "list",
    icon: <List />,
    name: "List",
    element: <L />,
  },
  {
    id: "b/matrix",
    path: "matrix",
    icon: <Grid3X3 />,
    name: "Matrix",
    element: <MAT />,
  },
  {
    id: "b/string",
    path: "string",
    icon: <WholeWord />,
    name: "String",
    element: <S />,
  },
  {
    id: "b/linked-list",
    path: "linked-list",
    icon: <Cable />,
    name: "Linked List",
    element: <LL />,
  },
  {
    id: "b/deque",
    path: "deque",
    icon: <Move />,
    name: "Deque",
    element: <D />,
  },
  {
    id: "b/stack",
    path: "stack",
    icon: <Layers />,
    name: "Stack",
    element: <STK />,
  },
  {
    id: "b/queue",
    path: "queue",
    icon: <ListEnd />,
    name: "Queue",
    element: <Q />,
  },
  {
    id: "b/bit-magic",
    path: "bit-magic",
    icon: <Binary />,
    name: "Bit Magic",
    element: <BM />,
  },
];

export default basicRoutes;
