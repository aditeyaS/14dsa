import React from "react";
import { cn } from "../lib/utils";

export const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h1
      className={cn(
        "text-4xl font-bold text-center cursor-default tracking-widest text-primary",
        className
      )}
      {...props}
    />
  );
};

export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
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
    />
  );
};

export const TEXT: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  return <p className={cn("text-xl", className)} {...props} />;
};

export const TEXT2: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  return <p className={cn("text-lg", className)} {...props} />;
};
