import React from "react";
import { cn } from "../lib/utils";

export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={cn("text-2xl underline cursor-default", className)}
      {...props}
    >
      {children}
    </h2>
  );
};
