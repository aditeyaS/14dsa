import React from "react";
import { cn } from "../lib/utils";

export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={cn(
        "text-3xl cursor-default tracking-widest font-bold",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
