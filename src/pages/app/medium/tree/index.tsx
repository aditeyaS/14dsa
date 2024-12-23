import { lazy } from "react";
import { Dice1, Dice2, Scale } from "lucide-react";
import AppRouteObject from "@/types/app-route-object";

const SBBST = lazy(() => import("./self-balancing-bst"));
const AVLT = lazy(() => import("./avl-tree"));
const RBT = lazy(() => import("./rb-tree"));

const treeRoutes: AppRouteObject[] = [
  {
    path: "self-balancing-bst",
    name: "Self Balancing BST",
    icon: <Scale />,
    element: <SBBST />,
  },
  {
    path: "avl-tree",
    name: "AVL Tree",
    icon: <Dice1 />,
    element: <AVLT />,
  },
  {
    path: "red-black-tree",
    name: "Red Black Tree",
    icon: <Dice2 />,
    element: <RBT />,
  },
];

export default treeRoutes;
