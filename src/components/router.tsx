import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppContainer } from "./app-container";
import { Home } from "../pages";
import { Recursion } from "../pages/recursion";
import { Sorting } from "../pages/sorting";
import { BinaryTree } from "../pages/binary-tree";

// basic
const Analysis = lazy(() => import("../pages/basics/analysis"));
const Math = lazy(() => import("../pages/basics/math"));
const BitMagic = lazy(() => import("../pages/basics/bit-magic"));
// data structures
const Tuple = lazy(() => import("../pages/data-structures/tuple"));
const Dictionary = lazy(() => import("../pages/data-structures/dictionary"));
const Set = lazy(() => import("../pages/data-structures/set"));
const List = lazy(() => import("../pages/data-structures/list"));
const String = lazy(() => import("../pages/data-structures/string"));
const LinkedList = lazy(() => import("../pages/data-structures/linked-list"));
const Matrix = lazy(() => import("../pages/data-structures/matrix"));
const Deque = lazy(() => import("../pages/data-structures/deque"));
const Stack = lazy(() => import("../pages/data-structures/stack"));
const Queue = lazy(() => import("../pages/data-structures/queue"));
const Heap = lazy(() => import("../pages/data-structures/heap"));
const Tree = lazy(() => import("../pages/data-structures/tree"));

export const router = createBrowserRouter([
  {
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basics",
        children: [
          {
            path: "analysis",
            element: <Analysis />,
          },
          {
            path: "math",
            element: <Math />,
          },
          {
            path: "bit-magic",
            element: <BitMagic />,
          },
        ],
      },
      {
        path: "/data-structures",
        children: [
          {
            path: "tuple",
            element: <Tuple />,
          },
          {
            path: "dictionary",
            element: <Dictionary />,
          },
          {
            path: "set",
            element: <Set />,
          },
          {
            path: "list",
            element: <List />,
          },
          {
            path: "string",
            element: <String />,
          },
          {
            path: "linked-list",
            element: <LinkedList />,
          },
          {
            path: "matrix",
            element: <Matrix />,
          },
          {
            path: "deque",
            element: <Deque />,
          },
          {
            path: "stack",
            element: <Stack />,
          },
          {
            path: "queue",
            element: <Queue />,
          },
          {
            path: "heap",
            element: <Heap />,
          },
          {
            path: "tree",
            element: <Tree />,
          },
        ],
      },

      {
        path: "/recursion",
        element: <Recursion />,
      },

      {
        path: "/sorting",
        element: <Sorting />,
      },

      {
        path: "/binary-tree",
        element: <BinaryTree />,
      },
    ],
  },
]);
