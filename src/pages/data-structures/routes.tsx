import { lazy } from "react";
import { AppRouteObject } from "@/types/app-route-object";

const SetDS = lazy(() => import("./set"));
const Dictionary = lazy(() => import("./dictionary"));
const Tuple = lazy(() => import("./tuple"));
const List = lazy(() => import("./list"));
const String = lazy(() => import("./string"));
const LinkedList = lazy(() => import("./linked-list"));
const CircularLinkedList = lazy(() => import("./circular-linked-list"));
const DoublyLinkedList = lazy(() => import("./doubly-linked-list"));
const Deque = lazy(() => import("./deque"));
const Stack = lazy(() => import("./stack"));
const Queue = lazy(() => import("./queue"));
const Matrix = lazy(() => import("./matrix"));
const Tree = lazy(() => import("./tree"));
const BST = lazy(() => import("./bst"));
const Trie = lazy(() => import("./trie"));
const Heap = lazy(() => import("./heap"));

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
    path: "circular-linked-list",
    name: "Circular Linked List",
    element: <CircularLinkedList />,
  },
  {
    path: "doubly-linked-list",
    name: "Doubly Linked List",
    element: <DoublyLinkedList />,
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
    path: "matrix",
    name: "Matrix",
    element: <Matrix />,
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
    path: "trie",
    name: "Trie",
    element: <Trie />,
  },
  {
    path: "heap",
    name: "Heap",
    element: <Heap />,
  },
];
