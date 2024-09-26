import React from "react";
import { LogoIcon } from "../icons";

export const Loader: React.FC = () => {
  return (
    <div className="w-screen h-screen z-50 bg-base flex items-center justify-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary"></div>
        <LogoIcon className="h-24 w-24" />
      </div>
    </div>
  );
};
