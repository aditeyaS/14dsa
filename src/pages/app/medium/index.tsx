import AppRouteObject from "@/types/app-route-object";
import {
  DatabaseBackup,
  List,
  TreePalm,
  UtensilsCrossed,
  Waypoints,
  WholeWord,
} from "lucide-react";
import listRoutes from "./list";
import treeRoutes from "./tree";
import stringRoutes from "./string";
import graphRoutes from "./graph";
import dpRoutes from "./dp";
import greedyRoutes from "./greedy";

const mediumRoutes: AppRouteObject[] = [
  {
    path: "list",
    icon: <List />,
    name: "List",
    children: listRoutes,
  },
  {
    path: "string",
    icon: <WholeWord />,
    name: "String",
    children: stringRoutes,
  },
  {
    path: "tree",
    icon: <TreePalm />,
    name: "Tree",
    children: treeRoutes,
  },
  {
    path: "graph",
    icon: <Waypoints />,
    name: "Graph",
    children: graphRoutes,
  },
  {
    path: "greedy",
    icon: <UtensilsCrossed />,
    name: "Greedy",
    children: greedyRoutes,
  },
  {
    path: "dp",
    icon: <DatabaseBackup />,
    name: "DP",
    children: dpRoutes,
  },
];

export default mediumRoutes;
