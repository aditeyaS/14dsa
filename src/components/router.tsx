import { createBrowserRouter } from "react-router-dom";
import { AppContainer } from "./app-container";
import { List } from "../pages/list";
import { Stack } from "../pages/stack";
import { Home } from "../pages";
import { Dictionary } from "../pages/dictionary";
import { Set } from "../pages/set";
import { Queue } from "../pages/queue";
import { LinkedList } from "../pages/linked-list";
import { Heap } from "../pages/heap";
import { BitMagic } from "../pages/bit-magic";
import { Analysis } from "../pages/analysis";
import { Recursion } from "../pages/recursion";
import { String } from "../pages/string";
import { Sorting } from "../pages/sorting";
import { Matrix } from "../pages/matrix";
import { BinaryTree } from "../pages/binary-tree";
import { Deque } from "../pages/deque";

export const router = createBrowserRouter([
  {
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/stack",
        element: <Stack />,
      },
      {
        path: "/dictionary",
        element: <Dictionary />,
      },
      {
        path: "/set",
        element: <Set />,
      },
      {
        path: "/queue",
        element: <Queue />,
      },
      {
        path: "/linked-list",
        element: <LinkedList />,
      },
      {
        path: "/heap",
        element: <Heap />,
      },
      {
        path: "/bit-magic",
        element: <BitMagic />,
      },
      {
        path: "/analysis",
        element: <Analysis />,
      },
      {
        path: "/recursion",
        element: <Recursion />,
      },
      {
        path: "/string",
        element: <String />,
      },
      {
        path: "/sorting",
        element: <Sorting />,
      },
      {
        path: "/matrix",
        element: <Matrix />,
      },
      {
        path: "/binary-tree",
        element: <BinaryTree />,
      },
      {
        path: "/deque",
        element: <Deque />,
      },
    ],
  },
]);
