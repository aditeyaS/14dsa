import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import NotFound from "./not-found";
import AppLayout from "./app/_layout";
import appRoutes from "./app";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home /> },
      { path: "app", element: <AppLayout />, children: appRoutes },
    ],
  },
]);

export default router;
