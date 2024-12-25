import AppRouteObject from "@/types/app-route-object";
import PaginationRouteObject from "@/types/pagination-route-object";

export default function flattenRoutes(
  routes: AppRouteObject[],
  parentPath = ""
): PaginationRouteObject[] {
  const result: PaginationRouteObject[] = [];
  for (const route of routes) {
    const fullPath = `${parentPath}${route.path}`;
    const { children, name, element } = route;
    if (name && element) result.push({ name, path: fullPath });
    if (children) {
      result.push(...flattenRoutes(children, fullPath + "/"));
    }
  }
  return result;
}
