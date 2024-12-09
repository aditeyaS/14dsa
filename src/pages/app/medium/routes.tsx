import AppRouteObject from "@/types/app-route-object";
import listRoutes from "./list/routes";
import { List } from "lucide-react";

const mediumRoutes: AppRouteObject[] = [
  {
    path: "list",
    icon: <List />,
    name: "List",
    children: listRoutes,
  },
];

export default mediumRoutes;
