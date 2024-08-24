import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./nav-bar";

export const AppContainer: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};
