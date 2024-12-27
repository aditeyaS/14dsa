import { lazy } from "react";
import AppRouteObject from "@/types/app-route-object";
import { BedDouble, FileWarning, PersonStanding } from "lucide-react";

const I = lazy(() => import("./introduction"));
const FK = lazy(() => import("./fractional-knapsack"));
const HC = lazy(() => import("./huffman-coding"));

const greedyRoutes: AppRouteObject[] = [
  {
    path: "introduction",
    name: "Introduction",
    icon: <FileWarning />,
    element: <I />,
  },
  {
    path: "fractional-knapsack",
    name: "Fractional Knapsack",
    icon: <BedDouble />,
    element: <FK />,
  },
  {
    path: "huffman-coding",
    name: "Huffman Coding",
    icon: <PersonStanding />,
    element: <HC />,
  },
];

export default greedyRoutes;
