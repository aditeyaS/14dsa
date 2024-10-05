import React from "react";

interface ComplexityProps {
  time?: string;
  space?: string;
}

export const Complexity: React.FC<ComplexityProps> = ({ time, space }) => {
  return (
    <div className="flex gap-1 items-center">
      <span>{time}</span>
      <span>|</span>
      <span>{space}</span>
    </div>
  );
};
