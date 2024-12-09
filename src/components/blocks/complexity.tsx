import { cva, VariantProps } from "class-variance-authority";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Cpu, Timer } from "lucide-react";

const complexityVariants = cva("text-black text-sm", {
  variants: {
    level: {
      1: "bg-green-400",
      2: "bg-lime-400",
      3: "bg-yellow-400",
      4: "bg-orange-400",
      5: "bg-red-400",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

interface ComplexityProps extends VariantProps<typeof complexityVariants> {
  complexity: string;
}
export function Complexity({ complexity, level }: ComplexityProps) {
  return (
    <Badge variant={"outline"} className={cn(complexityVariants({ level }))}>
      {complexity}
    </Badge>
  );
}

const spaceTimeComplexityVariants = cva("text-black text-sm mr-4", {
  variants: {
    timeLevel: {
      1: "bg-green-400",
      2: "bg-lime-400",
      3: "bg-yellow-400",
      4: "bg-orange-400",
      5: "bg-red-400",
    },
    spaceLevel: {
      1: "bg-green-400",
      2: "bg-lime-400",
      3: "bg-yellow-400",
      4: "bg-orange-400",
      5: "bg-red-400",
    },
  },
});

interface SpaceTimeComplexityProps
  extends VariantProps<typeof spaceTimeComplexityVariants> {
  time: string;
  space: string;
}

export function SpaceTimeComplexity({
  time,
  timeLevel,
  space,
  spaceLevel,
}: SpaceTimeComplexityProps) {
  return (
    <span className="flex gap-1">
      <Timer />
      <Badge
        variant={"outline"}
        className={cn(spaceTimeComplexityVariants({ timeLevel }))}
      >
        {time}
      </Badge>
      <Cpu />
      <Badge
        variant={"outline"}
        className={cn(spaceTimeComplexityVariants({ spaceLevel }))}
      >
        {space}
      </Badge>
    </span>
  );
}
