import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { paginationRoutes } from "@/pages/app";

export function usePagination() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { previousRoute, nextRoute } = useMemo(() => {
    const currentIndex = paginationRoutes.findIndex(
      (route) => route.path === currentPath
    );

    if (currentIndex === -1) {
      return { previousRoute: null, nextRoute: null };
    }

    return {
      previousRoute: paginationRoutes[currentIndex - 1] || null,
      nextRoute: paginationRoutes[currentIndex + 1] || null,
    };
  }, [currentPath]);

  return { previousRoute, nextRoute };
}
