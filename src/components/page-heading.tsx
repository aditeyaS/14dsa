import React from "react";
import { cn } from "../lib/utils";

export const PageHeading: React.FC<
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, className, ...props }) => {
  return (
    <h2 className={cn("text-2xl font-bold", className)} {...props}>
      {children}
    </h2>
  );
};
