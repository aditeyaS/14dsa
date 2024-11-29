import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const complexityVariants = cva("text-black text-sm", {
  variants: {
    timeVariant: {
      excellent: "bg-green-400",
      good: "bg-lime-400",
      fair: "bg-yellow-400",
      bad: "bg-orange-400",
      horrible: "bg-red-400",
    },
    spaceVariant: {
      excellent: "bg-green-400",
      good: "bg-lime-400",
      fair: "bg-yellow-400",
      bad: "bg-orange-400",
      horrible: "bg-red-400",
    },
  },
});

interface ComplexityProps extends VariantProps<typeof complexityVariants> {
  time?: string;
  space?: string;
}

export const Complexity: React.FC<ComplexityProps> = ({
  time,
  timeVariant,
  space,
  spaceVariant,
}) => {
  return (
    <span className="flex items-center space-x-4">
      <span>
        Time:{" "}
        <Badge
          variant={"outline"}
          className={cn(complexityVariants({ timeVariant }))}
        >
          {time}
        </Badge>
      </span>
      <span>
        Space:{" "}
        <Badge
          variant={"outline"}
          className={cn(complexityVariants({ spaceVariant }))}
        >
          {space}
        </Badge>
      </span>
    </span>
  );
};

const singleComplexityVariants = cva("text-black text-sm", {
  variants: {
    variant: {
      excellent: "bg-green-400",
      good: "bg-lime-400",
      fair: "bg-yellow-400",
      bad: "bg-orange-400",
      horrible: "bg-red-400",
    },
  },
  defaultVariants: {
    variant: "excellent",
  },
});

interface SingleComplexityProps
  extends VariantProps<typeof singleComplexityVariants> {
  complexity: string;
}
export function SingleComplexity({
  complexity,
  variant,
}: SingleComplexityProps) {
  return (
    <Badge
      variant={"outline"}
      className={cn(singleComplexityVariants({ variant }))}
    >
      {complexity}
    </Badge>
  );
}
