import { cn } from "@/lib/utils";
import React from "react";

export default function SectionContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("py-4 flex flex-col  gap-2", className)} {...props} />
  );
}
