import { cn } from "@/lib/utils";
import React from "react";

function Heading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-4xl font-bold cursor-default tracking-widest underline-offset-4",
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
        "text-3xl cursor-default tracking-widest font-bold underline-offset-4",
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

function Strong({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <strong
      className={cn("underline underline-offset-4 px-0.5", className)}
      {...props}
    />
  );
}

export { Heading, Heading2, Paragraph, Paragraph2, Strong };
