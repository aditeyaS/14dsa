import React from "react";
import { cn } from "../lib/utils";

export const UL: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => {
  return <ul className={cn("list-disc list-inside", className)} {...props} />;
};

export const LI: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => {
  return <li className={cn("text-xl", className)} {...props} />;
};
