import { cn } from "@/lib/utils";
import React from "react";

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
