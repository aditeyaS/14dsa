import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import logo from "@/assets/logo.svg";
import { ModeToggle } from "./mode-toggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { NavLink } from "react-router-dom";
import { basicsRoutes } from "@/pages/basic/routes";
import { dataStructuresRoutes } from "@/pages/data-structures/routes";
import { mathRoutes } from "@/pages/algorithms/math/routes";
import { bitMagicRoutes } from "@/pages/algorithms/bit-magic/routes";
import { listRoutes } from "@/pages/algorithms/list/routes";
import { treeRoutes } from "@/pages/algorithms/tree/routes";
import { linkedListRoutes } from "@/pages/algorithms/linked-list/routes";
import { matrixRoutes } from "@/pages/algorithms/matrix/routes";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row justify-center items-center text-2xl text-primary">
        <img src={logo} className="w-10" alt="Logo" />
        14dsa
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <NavLink to="/">
                {({ isActive }) => (
                  <SidebarMenuButton isActive={isActive}>
                    Home
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>Basic</SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {basicsRoutes.map((route) => (
                    <SidebarMenuSub key={route.path}>
                      <SidebarMenuSubItem>
                        <NavLink to={`/basic/${route.path}`}>
                          {({ isActive }) => (
                            <SidebarMenuSubButton isActive={isActive}>
                              {route.name}
                            </SidebarMenuSubButton>
                          )}
                        </NavLink>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  ))}
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
          <SidebarMenu>
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>Data structures</SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {dataStructuresRoutes.map((route) => (
                    <SidebarMenuSub key={route.path}>
                      <SidebarMenuSubItem>
                        <NavLink to={`/ds/${route.path}`}>
                          {({ isActive }) => (
                            <SidebarMenuSubButton isActive={isActive}>
                              {route.name}
                            </SidebarMenuSubButton>
                          )}
                        </NavLink>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  ))}
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Algorithms & Patterns</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>Math</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {mathRoutes.map((route) => (
                      <SidebarMenuSub key={route.path}>
                        <SidebarMenuSubItem>
                          <NavLink to={`/algorithms/math/${route.path}`}>
                            {({ isActive }) => (
                              <SidebarMenuButton isActive={isActive}>
                                {route.name}
                              </SidebarMenuButton>
                            )}
                          </NavLink>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>Bit magic</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {bitMagicRoutes.map((route) => (
                      <SidebarMenuSub key={route.path}>
                        <SidebarMenuSubItem>
                          <NavLink to={`/algorithms/bit-magic/${route.path}`}>
                            {({ isActive }) => (
                              <SidebarMenuButton isActive={isActive}>
                                {route.name}
                              </SidebarMenuButton>
                            )}
                          </NavLink>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>List</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {listRoutes.map((route) => (
                      <SidebarMenuSub key={route.path}>
                        <SidebarMenuSubItem>
                          <NavLink to={`/algorithms/list/${route.path}`}>
                            {({ isActive }) => (
                              <SidebarMenuButton isActive={isActive}>
                                {route.name}
                              </SidebarMenuButton>
                            )}
                          </NavLink>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>Matrix</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {matrixRoutes.map((route) => (
                      <SidebarMenuSub key={route.path}>
                        <SidebarMenuSubItem>
                          <NavLink to={`/algorithms/matrix/${route.path}`}>
                            {({ isActive }) => (
                              <SidebarMenuButton isActive={isActive}>
                                {route.name}
                              </SidebarMenuButton>
                            )}
                          </NavLink>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>Linked List</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {linkedListRoutes.map((route) => (
                      <SidebarMenuSub key={route.path}>
                        <SidebarMenuSubItem>
                          <NavLink to={`/algorithms/linked-list/${route.path}`}>
                            {({ isActive }) => (
                              <SidebarMenuButton isActive={isActive}>
                                {route.name}
                              </SidebarMenuButton>
                            )}
                          </NavLink>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>Tree</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {treeRoutes.map((route) => (
                      <SidebarMenuSub key={route.path}>
                        <SidebarMenuSubItem>
                          <NavLink to={`/algorithms/tree/${route.path}`}>
                            {({ isActive }) => (
                              <SidebarMenuButton isActive={isActive}>
                                {route.name}
                              </SidebarMenuButton>
                            )}
                          </NavLink>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
