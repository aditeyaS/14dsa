import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Loader, router } from "./components";
import { ThemeProvider } from "./components/theme-provider";
import { FontSizeProvider } from "./components/font-size-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <FontSizeProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </FontSizeProvider>
    </ThemeProvider>
  </StrictMode>
);
