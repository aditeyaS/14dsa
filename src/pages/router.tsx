import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppContainer } from "../components/app-container";
import { basicsRoutes } from "./basics/routes";
import { dataStructuresRoutes } from "./data-structures/routes";
import { algorithmRoutes } from "./algorithms/routes";
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
      { path: "basics", children: basicsRoutes },
      { path: "data-structures", children: dataStructuresRoutes },
      { path: "algorithms", children: algorithmRoutes },
    ],
  },
]);
