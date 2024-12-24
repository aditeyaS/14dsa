import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import AppRouteObject from "@/types/app-route-object";

interface RouteGroupProps {
  label: string;
  routes: AppRouteObject[];
}

export default function RouteSidebarGroup({ label, routes }: RouteGroupProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="uppercase">{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {routes.map((route) =>
            route.element ? (
              <SidebarMenuItem key={`${label}-${route.path}`}>
                <NavLink to={`/app/${label}/${route.path}`}>
                  {({ isActive }) => (
                    <SidebarMenuButton
                      isActive={isActive}
                      className="data-[active=true]:text-primary"
                    >
                      {route.icon}
                      {route.name}
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
            ) : (
              <Collapsible
                key={`${label}-${route.path}`}
                asChild
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={route.path}>
                      {route.icon}
                      {route.name}
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {route.children?.map((r) => (
                        <SidebarMenuSubItem
                          key={`${label}-${route.path}-${r.path}`}
                        >
                          <NavLink to={`/app/${label}/${route.path}/${r.path}`}>
                            {({ isActive }) => (
                              <SidebarMenuButton
                                isActive={isActive}
                                className="data-[active=true]:text-primary"
                              >
                                {r.icon}
                                {r.name}
                              </SidebarMenuButton>
                            )}
                          </NavLink>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            )
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
