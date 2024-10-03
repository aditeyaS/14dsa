import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./nav-bar";
import { Footer } from "./footer";
import { ScrollToTop } from "./scroll-to-top";

export const AppContainer: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="my-12">
        <Outlet />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};
