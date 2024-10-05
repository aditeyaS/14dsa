import React from "react";
import { cn } from "../lib/utils";

export const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />;
};
