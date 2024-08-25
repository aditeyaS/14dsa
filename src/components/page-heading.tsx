import React from "react";
import { cn } from "../lib/utils";

interface PageHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const PageHeading: React.FC<PageHeadingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2 className={cn("text-2xl", className)} {...props}>
      {children}
    </h2>
  );
};
