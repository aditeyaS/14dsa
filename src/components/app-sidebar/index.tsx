import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import logo from "@/assets/logo.svg";
import { ModeToggle } from "@/components/mode-toggle";
import RouteSidebarGroup from "./route-sidebar-group";
import basicRoutes from "@/pages/app/basic/routes";
import easyRoutes from "@/pages/app/easy/routes";
import { Separator } from "../ui/separator";
import mediumRoutes from "@/pages/app/medium/routes";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row justify-center items-center text-2xl text-primary">
        <img src={logo} className="w-10" alt="Logo" />
        14dsa
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <RouteSidebarGroup label="basic" routes={basicRoutes} />
        <Separator />
        <RouteSidebarGroup label="easy" routes={easyRoutes} />
        <Separator />
        <RouteSidebarGroup label="medium" routes={mediumRoutes} />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
