import AppRouteObject from "@/types/app-route-object";
import { List } from "lucide-react";
import listRoutes from "./list";

const mediumRoutes: AppRouteObject[] = [
  {
    path: "list",
    icon: <List />,
    name: "List",
    children: listRoutes,
  },
];

export default mediumRoutes;
