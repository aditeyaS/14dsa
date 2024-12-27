import { cn } from "@/lib/utils";
import React from "react";

export const UL: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => {
  return <ul className={cn("list-disc list-inside", className)} {...props} />;
};

export const OL: React.FC<React.HTMLAttributes<HTMLOListElement>> = ({
  className,
  ...props
}) => {
  return (
    <ol className={cn("list-decimal list-inside", className)} {...props} />
  );
};

export const LI: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => {
  return <li className={cn(className)} {...props} />;
};
