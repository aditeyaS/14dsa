import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <div className="w-full flex bg-primary p-2 text-primary-content">
      <Link to="/">
        <span className="text-xl">Python DSA</span>
      </Link>
    </div>
  );
};
