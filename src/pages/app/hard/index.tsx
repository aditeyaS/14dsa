import AppRouteObject from "@/types/app-route-object";
import { List } from "lucide-react";
import listRoutes from "./list";

const hardRoutes: AppRouteObject[] = [
  {
    path: "list",
    icon: <List />,
    name: "List",
    children: listRoutes,
  },
];

export default hardRoutes;
