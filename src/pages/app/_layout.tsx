import { SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import Sidebar from "./_side-bar";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <SidebarTrigger title="Toggle Sidebar" />
      <Outlet />
    </>
  );
}
