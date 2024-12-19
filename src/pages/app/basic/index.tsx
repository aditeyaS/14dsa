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
    path: "analysis",
    icon: <ChartSpline />,
    name: "Analysis",
    element: <A />,
  },
  {
    path: "recursion",
    icon: <Repeat />,
    name: "Recursion",
    element: <R />,
  },
  {
    path: "math",
    icon: <Calculator />,
    name: "Math",
    element: <M />,
  },
  {
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
        path: "set",
        icon: <Parentheses />,
        name: "Set",
        element: <SET />,
      },
      {
        path: "dictionary",
        icon: <Braces />,
        name: "Dictionary",
        element: <DICT />,
      },
    ],
  },
  {
    path: "list",
    icon: <List />,
    name: "List",
    element: <L />,
  },
  {
    path: "matrix",
    icon: <Grid3X3 />,
    name: "Matrix",
    element: <MAT />,
  },
  {
    path: "string",
    icon: <WholeWord />,
    name: "String",
    element: <S />,
  },
  {
    path: "linked-list",
    icon: <Cable />,
    name: "Linked List",
    element: <LL />,
  },
  {
    path: "deque",
    icon: <Move />,
    name: "Deque",
    element: <D />,
  },
  {
    path: "stack",
    icon: <Layers />,
    name: "Stack",
    element: <STK />,
  },
  {
    path: "queue",
    icon: <ListEnd />,
    name: "Queue",
    element: <Q />,
  },
  {
    path: "bit-magic",
    icon: <Binary />,
    name: "Bit Magic",
    element: <BM />,
  },
];

export default basicRoutes;
