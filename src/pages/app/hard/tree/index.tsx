import { lazy } from "react";
import { ChevronsDownUp, Flame, GlobeLock } from "lucide-react";
import AppRouteObject from "@/types/app-route-object";

const LCA = lazy(() => import("./lca"));
const BBT = lazy(() => import("./burn-binary-tree"));
const S = lazy(() => import("./serialization"));

const treeRoutes: AppRouteObject[] = [
  {
    path: "least-common-ancestor",
    name: "LCA",
    icon: <ChevronsDownUp />,
    element: <LCA />,
  },
  {
    path: "burn-binary-tree",
    name: "Burn Binary Tree",
    icon: <Flame />,
    element: <BBT />,
  },
  {
    path: "serialization",
    name: "Serialization",
    icon: <GlobeLock />,
    element: <S />,
  },
];

export default treeRoutes;
