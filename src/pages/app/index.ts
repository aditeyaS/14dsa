import AppRouteObject from "@/types/app-route-object";
import flattenRoutes from "@/lib/flatten-routes";

import basicRoutes from "./basic";
import easyRoutes from "./easy";
import mediumRoutes from "./medium";
import hardRoutes from "./hard";

const appRoutes: AppRouteObject[] = [
  {
    path: "basic",
    children: basicRoutes,
  },
  {
    path: "easy",
    children: easyRoutes,
  },
  {
    path: "medium",
    children: mediumRoutes,
  },
  {
    path: "hard",
    children: hardRoutes,
  },
];

export default appRoutes;

export const paginationRoutes = flattenRoutes(appRoutes, "/app/");
