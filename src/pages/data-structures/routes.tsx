import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const Tuple = lazy(() => import("./tuple"));
const Dictionary = lazy(() => import("./dictionary"));
const Set = lazy(() => import("./set"));
const List = lazy(() => import("./list"));
const String = lazy(() => import("./string"));
const LinkedList = lazy(() => import("./linked-list"));
const CircularLinkedList = lazy(() => import("./circular-linked-list"));
const DoublyLinkedList = lazy(() => import("./doubly-linked-list"));
const Matrix = lazy(() => import("./matrix"));
const Deque = lazy(() => import("./deque"));
const Stack = lazy(() => import("./stack"));
const Queue = lazy(() => import("./queue"));
const Heap = lazy(() => import("./heap"));
const Tree = lazy(() => import("./tree"));
const BinarySearchTree = lazy(() => import("./binary-search-tree"));
const Trie = lazy(() => import("./trie"));

export const dataStructuresRoutes: RouteObject[] = [
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
    path: "binary-search-tree",
    element: <BinarySearchTree />,
  },
  {
    path: "trie",
    element: <Trie />,
  },
];

export const DataStructuresRoutes: RouteObject = {
  path: "data-structures",
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
      path: "binary-search-tree",
      element: <BinarySearchTree />,
    },
    {
      path: "trie",
      element: <Trie />,
    },
  ],
};
