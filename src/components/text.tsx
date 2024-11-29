import React from "react";
import { cn } from "../lib/utils";

function Heading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-4xl font-bold cursor-default tracking-widest",
        className
      )}
      {...props}
    />
  );
}

function Heading2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-3xl cursor-default tracking-widest font-bold",
        className
      )}
      {...props}
    />
  );
}

function Paragraph({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-xl", className)} {...props} />;
}

function Paragraph2({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-lg", className)} {...props} />;
}

export { Heading, Heading2, Paragraph, Paragraph2 };
