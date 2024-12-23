import AppRouteObject from "@/types/app-route-object";
import { List, TreePalm } from "lucide-react";
import listRoutes from "./list";
import treeRoutes from "./tree";

const mediumRoutes: AppRouteObject[] = [
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
];

export default mediumRoutes;
