import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/app-layout";
import Home from "./home";
import NotFound from "./not-found";
import appRoutes from "./app/routes";

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
