import AppLayout from "@/components/layout/app-layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import { basicsRoutes } from "./basic/routes";
import { dataStructuresRoutes } from "./data-structures/routes";
import { mathRoutes } from "./algorithms/math/routes";
import NotFound from "./not-found";
import { bitMagicRoutes } from "./algorithms/bit-magic/routes";
import { listRoutes } from "./algorithms/list/routes";
import { treeRoutes } from "./algorithms/tree/routes";
import { linkedListRoutes } from "./algorithms/linked-list/routes";
import { matrixRoutes } from "./algorithms/matrix/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home /> },
      { path: "basic", children: basicsRoutes },
      { path: "ds", children: dataStructuresRoutes },
      {
        path: "algorithms",
        children: [
          { path: "bit-magic", children: bitMagicRoutes },
          { path: "math", children: mathRoutes },
          { path: "list", children: listRoutes },
          { path: "matrix", children: matrixRoutes },
          { path: "linked-list", children: linkedListRoutes },
          { path: "tree", children: treeRoutes },
        ],
      },
    ],
  },
]);

export default router;
