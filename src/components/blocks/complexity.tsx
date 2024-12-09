import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const complexityVariants = cva(
  "text-black text-sm inline-flex items-center rounded-md border px-2.5 py-0.5",
  {
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
  }
);

interface ComplexityProps extends VariantProps<typeof complexityVariants> {
  complexity: string;
}
export function Complexity({ complexity, level }: ComplexityProps) {
  return <div className={cn(complexityVariants({ level }))}>{complexity}</div>;
}

const spaceTimeComplexityVariants = cva(
  "text-black text-sm mr-4 inline-flex items-center rounded-md border px-2.5 py-0.5 font-bold",
  {
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
  }
);

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
    <span className="inline-flex gap-1 items-center">
      Time:
      <div className={cn(spaceTimeComplexityVariants({ timeLevel }))}>
        {time}
      </div>
      Space:
      <div className={cn(spaceTimeComplexityVariants({ spaceLevel }))}>
        {space}
      </div>
    </span>
  );
}
