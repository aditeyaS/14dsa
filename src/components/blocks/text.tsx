import { cn } from "@/lib/utils";
import React from "react";

function Heading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold cursor-default tracking-wide underline-offset-4",
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
        "text-xl cursor-default underline-offset-4 text-muted-foreground",
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
  return <p className={cn(className)} {...props} />;
}

function Paragraph2({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-muted-foreground", className)} {...props} />;
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
