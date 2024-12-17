import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const alertVariants = cva("p-2 border-l-4 rounded flex flex-col gap-2", {
  variants: {
    type: {
      Note: "border-blue-500 bg-blue-500/25",
      Tip: "border-green-500 bg-green-500/25",
      Important: "border-violet-500 bg-violet-500/25",
      Warning: "bg-green-500",
      Caution: "border-red-500 bg-red-500/25",
    },
  },
});

interface AlertProps extends VariantProps<typeof alertVariants> {
  children: React.ReactNode;
}

export function Alert({ children, type }: AlertProps) {
  return (
    <div className={cn(alertVariants({ type }))}>
      <div className="uppercase text-xs font-bold">
        {type === "Note" && <div className="text-blue-500">{type}</div>}
        {type === "Tip" && <div className="text-green-500">{type}</div>}
        {type === "Important" && <div className="text-violet-500">{type}</div>}
        {type === "Caution" && <div className="text-red-500">{type}</div>}
      </div>
      {children}
    </div>
  );
}
