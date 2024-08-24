import { createBrowserRouter } from "react-router-dom";
import { AppContainer } from "./app-container";
import { List } from "../pages/list";
import { Stack } from "../pages/stack";
import { Home } from "../pages";
import { Dictionary } from "../pages/dictionary";
import { Set } from "../pages/set";

export const router = createBrowserRouter([
  {
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/stack",
        element: <Stack />,
      },
      {
        path: "/dictionary",
        element: <Dictionary />,
      },
      {
        path: "/set",
        element: <Set />,
      },
    ],
  },
]);
