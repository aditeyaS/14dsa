import { createBrowserRouter } from "react-router-dom";
import { AppContainer } from "./app-container";
import { Tuple } from "../pages/data-structures/tuple";
import { Dictionary } from "../pages/data-structures/dictionary";
import { Set } from "../pages/data-structures/set";
import { List } from "../pages/data-structures/list";
import { String } from "../pages/data-structures/string";
import { LinkedList } from "../pages/data-structures/linked-list";
import { Matrix } from "../pages/data-structures/matrix";
import { Deque } from "../pages/data-structures/deque";
import { Stack } from "../pages/data-structures/stack";
import { Queue } from "../pages/data-structures/queue";
import { Heap } from "../pages/data-structures/heap";
// after this
import { Home } from "../pages";
import { Analysis } from "../pages/basics/analysis";
import { Math } from "../pages/basics/math";
import { BitMagic } from "../pages/basics/bit-magic";
import { Recursion } from "../pages/recursion";
import { Sorting } from "../pages/sorting";
import { BinaryTree } from "../pages/binary-tree";
import { Tree } from "../pages/data-structures/tree";

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
            path: "bit-magic",
            element: <BitMagic />,
          },
          {
            path: "analysis",
            element: <Analysis />,
          },
          {
            path: "math",
            element: <Math />,
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
