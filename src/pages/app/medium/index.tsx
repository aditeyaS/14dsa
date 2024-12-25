import AppRouteObject from "@/types/app-route-object";
import { List, TreePalm, Waypoints, WholeWord } from "lucide-react";
import listRoutes from "./list";
import treeRoutes from "./tree";
import stringRoutes from "./string";
import graphRoutes from "./graph";

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
];

export default mediumRoutes;
