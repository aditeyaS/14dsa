import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const Tuple = lazy(() => import("./tuple"));
const SetDS = lazy(() => import("./set"));
const Dictionary = lazy(() => import("./dictionary"));
const List = lazy(() => import("./list"));
const Matrix = lazy(() => import("./matrix"));
const String = lazy(() => import("./string"));
const LinkedList = lazy(() => import("./linked-list"));
const Deque = lazy(() => import("./deque"));
const Stack = lazy(() => import("./stack"));
const Queue = lazy(() => import("./queue"));
const Tree = lazy(() => import("./tree"));
const BST = lazy(() => import("./bst"));
const Heap = lazy(() => import("./heap"));
const Trie = lazy(() => import("./trie"));

export const dataStructuresRoutes: AppRouteObject[] = [
  {
    path: "tuple",
    name: "Tuple",
    element: <Tuple />,
  },
  {
    path: "set",
    name: "Set",
    element: <SetDS />,
  },
  {
    path: "dictionary",
    name: "Dictionary",
    element: <Dictionary />,
  },
  {
    path: "list",
    name: "List",
    element: <List />,
  },
  {
    path: "matrix",
    name: "Matrix",
    element: <Matrix />,
  },
  {
    path: "string",
    name: "String",
    element: <String />,
  },
  {
    path: "linked-list",
    name: "Linked List",
    element: <LinkedList />,
  },
  {
    path: "deque",
    name: "Deque",
    element: <Deque />,
  },
  {
    path: "stack",
    name: "Stack",
    element: <Stack />,
  },
  {
    path: "queue",
    name: "Queue",
    element: <Queue />,
  },
  {
    path: "tree",
    name: "Tree",
    element: <Tree />,
  },
  {
    path: "bst",
    name: "Binary Search Tree",
    element: <BST />,
  },
  {
    path: "heap",
    name: "Heap",
    element: <Heap />,
  },
  {
    path: "trie",
    name: "Trie",
    element: <Trie />,
  },
];
