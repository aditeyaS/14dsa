import { RouteObject } from "react-router-dom";
import basicRoutes from "./basic";
import easyRoutes from "./easy";
import mediumRoutes from "./medium";
import hardRoutes from "./hard";

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
  {
    path: "hard",
    children: hardRoutes,
  },
];

export default appRoutes;
