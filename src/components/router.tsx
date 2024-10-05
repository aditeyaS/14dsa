import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppContainer } from "./app-container";
const Dashboard = lazy(() => import("../pages/dashboard"));
const Landing = lazy(() => import("../pages/landing"));
const NotFound = lazy(() => import("../pages/not-found"));
// basic
const Analysis = lazy(() => import("../pages/basics/analysis"));
const Recursion = lazy(() => import("../pages/basics/recursion"));
const Math = lazy(() => import("../pages/basics/math"));
const BitMagic = lazy(() => import("../pages/basics/bit-magic"));
// data structures
const Tuple = lazy(() => import("../pages/data-structures/tuple"));
const Dictionary = lazy(() => import("../pages/data-structures/dictionary"));
const Set = lazy(() => import("../pages/data-structures/set"));
const List = lazy(() => import("../pages/data-structures/list"));
const String = lazy(() => import("../pages/data-structures/string"));
const LinkedList = lazy(() => import("../pages/data-structures/linked-list"));
const CircularLinkedList = lazy(
  () => import("../pages/data-structures/circular-linked-list")
);
const DoublyLinkedList = lazy(
  () => import("../pages/data-structures/doubly-linked-list")
);
const Matrix = lazy(() => import("../pages/data-structures/matrix"));
const Deque = lazy(() => import("../pages/data-structures/deque"));
const Stack = lazy(() => import("../pages/data-structures/stack"));
const Queue = lazy(() => import("../pages/data-structures/queue"));
const Heap = lazy(() => import("../pages/data-structures/heap"));
const Tree = lazy(() => import("../pages/data-structures/tree"));
const BinaryTree = lazy(() => import("../pages/data-structures/binary-tree"));
// algorithms
const BinarySearch = lazy(
  () => import("../pages/algorithms/list/binary-search")
);
const Sorting1 = lazy(() => import("../pages/algorithms/list/sorting-1"));
const Sorting2 = lazy(() => import("../pages/algorithms/list/sorting-2"));
const C2Pointers = lazy(
  () => import("../pages/algorithms/linked-list/2-pointers")
);
const TreeDFS = lazy(() => import("../pages/algorithms/tree/dfs"));
const TreeBFS = lazy(() => import("../pages/algorithms/tree/bfs"));

export const router = createBrowserRouter([
  {
    element: <AppContainer />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/basics",
        children: [
          {
            path: "analysis",
            element: <Analysis />,
          },
          {
            path: "recursion",
            element: <Recursion />,
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
            path: "circular-linked-list",
            element: <CircularLinkedList />,
          },
          {
            path: "doubly-linked-list",
            element: <DoublyLinkedList />,
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
          {
            path: "binary-tree",
            element: <BinaryTree />,
          },
        ],
      },
      {
        path: "/algorithms",
        children: [
          {
            path: "list",
            children: [
              {
                path: "binary-search",
                element: <BinarySearch />,
              },
              {
                path: "sorting-1",
                element: <Sorting1 />,
              },
              {
                path: "sorting-2",
                element: <Sorting2 />,
              },
            ],
          },
          {
            path: "linked-list",
            children: [
              {
                path: "2-pointers",
                element: <C2Pointers />,
              },
            ],
          },
          {
            path: "tree",
            children: [
              {
                path: "dfs",
                element: <TreeDFS />,
              },
              {
                path: "bfs",
                element: <TreeBFS />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
