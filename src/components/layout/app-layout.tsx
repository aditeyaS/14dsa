import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <AppSidebar />
      <SidebarTrigger title="Toggle Sidebar" />
      <Outlet />
    </>
  );
}
