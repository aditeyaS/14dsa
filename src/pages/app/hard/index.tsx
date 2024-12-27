import AppRouteObject from "@/types/app-route-object";
import { List, TreePalm, Waypoints } from "lucide-react";
import listRoutes from "./list";
import treeRoutes from "./tree";
import graphRoutes from "./graph";

const hardRoutes: AppRouteObject[] = [
  {
    path: "list",
    icon: <List />,
    name: "List",
    children: listRoutes,
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

export default hardRoutes;
