import React from "react";
import { cn } from "../lib/utils";

export const PageSectionContainer: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...props }) => {
  return <div className={cn("flex flex-col gap-12", className)} {...props} />;
};
