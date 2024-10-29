import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppContainer } from "../components/app-container";
import { BasicsRoutes } from "./basics/routes";
import { DataStructuresRoutes } from "./data-structures/routes";
import { AlgorithmRoutes } from "./algorithms/routes";
const Dashboard = lazy(() => import("./dashboard"));
const Landing = lazy(() => import("./landing"));
const NotFound = lazy(() => import("./not-found"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      BasicsRoutes,
      DataStructuresRoutes,
      AlgorithmRoutes,
    ],
  },
]);
