import AppRouteObject from "@/types/app-route-object";
import { List, TreePalm, WholeWord } from "lucide-react";
import listRoutes from "./list";
import treeRoutes from "./tree";
import stringRoutes from "./string";

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
];

export default mediumRoutes;
