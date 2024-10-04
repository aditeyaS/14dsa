import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../icons";
import { H1, H2 } from "../../components";

const NotFound: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <LogoIcon className="w-20 h-20" />
        <H1 className="text-9xl font-black text-primary m-0">404</H1>
        <H2>Page not found</H2>
        <Link
          to="/"
          className="bg-primary px-2 py-1 rounded w-full flex justify-center"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
