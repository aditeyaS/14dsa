import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./nav-bar";
import { Footer } from "./footer";

export const AppContainer: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="my-12">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
