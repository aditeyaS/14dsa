import { lazy } from "react";
import AppRouteObject from "@/types/app-route-object";
import { FileWarning } from "lucide-react";

const I = lazy(() => import("./introduction"));

const dpRoutes: AppRouteObject[] = [
  {
    path: "introduction",
    name: "Introduction",
    icon: <FileWarning />,
    element: <I />,
  },
];

export default dpRoutes;
