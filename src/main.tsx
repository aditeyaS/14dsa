import "./index.css";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./pages/routes.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";
import Loader from "./components/loader.tsx";
import { ScrollToTop } from "./components/scroll-to-top.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
          <RouterProvider router={router} />
        </Suspense>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);
