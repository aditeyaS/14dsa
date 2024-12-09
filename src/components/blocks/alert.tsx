import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
  CircleAlert,
  Lightbulb,
  MessageSquareWarning,
  OctagonAlert,
} from "lucide-react";
import React from "react";

const alertVariants = cva("p-2 border border-2 rounded flex flex-col gap-2", {
  variants: {
    type: {
      Note: "border-blue-500",
      Tip: "border-green-500",
      Important: "border-violet-500",
      Warning: "bg-green-400",
      Caution: "border-red-500",
    },
  },
});

interface AlertProps extends VariantProps<typeof alertVariants> {
  children: React.ReactNode;
}

export function Alert({ children, type }: AlertProps) {
  return (
    <div className={cn(alertVariants({ type }))}>
      <div>
        {type === "Note" && (
          <div className="flex gap-2 text-blue-500">
            <CircleAlert />
            {type}
          </div>
        )}
        {type === "Tip" && (
          <div className="flex gap-2 text-green-500">
            <Lightbulb />
            {type}
          </div>
        )}
        {type === "Important" && (
          <div className="flex gap-2 text-violet-500">
            <MessageSquareWarning />
            {type}
          </div>
        )}
        {type === "Warning" && (
          <div className="flex gap-2 text-yellow">
            <CircleAlert />
            {type}
          </div>
        )}
        {type === "Caution" && (
          <div className="flex gap-2 text-red-500">
            <OctagonAlert />
            {type}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
