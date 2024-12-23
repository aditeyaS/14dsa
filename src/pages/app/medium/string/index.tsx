import { lazy } from "react";
import { Hash, PilcrowLeft } from "lucide-react";
import AppRouteObject from "@/types/app-route-object";

const RK = lazy(() => import("./rabin-karp"));
const KMP = lazy(() => import("./kmp"));

const stringRoutes: AppRouteObject[] = [
  {
    path: "rabin-karp",
    name: "Rabin Karp",
    icon: <Hash />,
    element: <RK />,
  },
  {
    path: "kmp",
    name: "Knuth Morris Pratt",
    icon: <PilcrowLeft />,
    element: <KMP />,
  },
];

export default stringRoutes;
