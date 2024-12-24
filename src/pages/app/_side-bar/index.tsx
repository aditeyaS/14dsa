import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import logo from "@/assets/logo.svg";
import { ModeToggle } from "@/components/mode-toggle";
import RouteSidebarGroup from "./route-sidebar-group";
import { Separator } from "@/components/ui/separator";
import basicRoutes from "../basic";
import easyRoutes from "../easy";
import mediumRoutes from "../medium";
import hardRoutes from "../hard";

export default function Sidebar() {
  return (
    <UISidebar>
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
        <Separator />
        <RouteSidebarGroup label="hard" routes={hardRoutes} />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
      <SidebarRail />
    </UISidebar>
  );
}
