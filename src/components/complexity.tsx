import React from "react";

interface ComplexityProps {
  time?: string;
  space?: string;
}

export const Complexity: React.FC<ComplexityProps> = ({ time, space }) => {
  return (
    <span>
      <span>Time: {time}</span>
      <span className="mx-2">|</span>
      <span>Space: {space}</span>
    </span>
  );
};
