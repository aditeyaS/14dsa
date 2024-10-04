import React from "react";
import { cn } from "../lib/utils";

export const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={cn(
        "text-4xl font-bold text-center my-5 cursor-default tracking-widest text-primary",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
