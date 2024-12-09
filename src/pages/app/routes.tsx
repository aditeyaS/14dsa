import { RouteObject } from "react-router-dom";
import basicRoutes from "./basic/routes";
import easyRoutes from "./easy/routes";
import mediumRoutes from "./medium/routes";

const appRoutes: RouteObject[] = [
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
];

export default appRoutes;
