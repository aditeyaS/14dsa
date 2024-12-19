import { RouteObject } from "react-router-dom";
import basicRoutes from "./basic";
import easyRoutes from "./easy";
import mediumRoutes from "./medium";

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
