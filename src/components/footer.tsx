import React from "react";
import { LogoIcon } from "../icons";

export const Footer: React.FC = () => {
  return (
    <div className="w-full bg-base-1 py-12 flex flex-col items-center">
      <LogoIcon className="w-20 h-20" />
    </div>
  );
};
