import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { paginationRoutes } from "@/pages/app";

export function usePagination() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { previousRoute, nextRoute, page, total } = useMemo(() => {
    const currentIndex = paginationRoutes.findIndex(
      (route) => route.path === currentPath
    );
    if (currentIndex === -1) {
      return { previousRoute: null, nextRoute: null, page: -1, total: -1 };
    }
    return {
      previousRoute: paginationRoutes[currentIndex - 1] || null,
      nextRoute: paginationRoutes[currentIndex + 1] || null,
      page: currentIndex + 1,
      total: paginationRoutes.length,
    };
  }, [currentPath]);

  return { previousRoute, nextRoute, page, total };
}
