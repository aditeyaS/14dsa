import { lazy } from "react";
import { Carrot, PaintBucket, Recycle, Tally5 } from "lucide-react";
import AppRouteObject from "@/types/app-route-object";

const CT = lazy(() => import("./counting-sort"));
const CS = lazy(() => import("./cycle-sort"));
const RS = lazy(() => import("./radix-sort"));
const BS = lazy(() => import("./bucket-sort"));

const listRoutes: AppRouteObject[] = [
  {
    path: "counting-sort",
    name: "Counting Sort",
    icon: <Tally5 />,
    element: <CT />,
  },
  {
    path: "cycle-sort",
    name: "Cycle Sort",
    icon: <Recycle />,
    element: <CS />,
  },
  {
    path: "radix-sort",
    name: "Radix Sort",
    icon: <Carrot />,
    element: <RS />,
  },
  {
    path: "bucket-sort",
    name: "Bucket Sort",
    icon: <PaintBucket />,
    element: <BS />,
  },
];

export default listRoutes;
